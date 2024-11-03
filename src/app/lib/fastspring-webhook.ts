import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/lib/firebase-admin"; // Import the auth object
import { buffer } from "micro";

// Ensure this endpoint is only accessible via FastSpring POST requests
export const config = {
  api: {
    bodyParser: false,
  },
};

// Define a type for FastSpring's event data
interface FastSpringEventData {
  event: string;
  email: string;
}

// Set the PAID status for a user
async function setPaidStatus(email: string, paid: boolean): Promise<void> {
  try {
    const userRecord = await auth.getUserByEmail(email);

    await auth.setCustomUserClaims(userRecord.uid, { PAID: paid });
    console.log(`User ${email} updated with PAID status: ${paid}`);
  } catch (error) {
    console.error(`Error updating user ${email} with PAID status: ${error}`);
    throw error;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const rawBody = await buffer(req);
  const fastspringSignature = req.headers["x-fs-signature"] as string;

  const isValid = verifyFastspringSignature(rawBody, fastspringSignature);
  if (!isValid) {
    return res.status(400).send("Invalid Signature");
  }

  const eventData = JSON.parse(rawBody.toString()) as FastSpringEventData;
  const { event, email } = eventData;

  try {
    if (event === "order.completed") {
      await setPaidStatus(email, true);
      res
        .status(200)
        .json({ message: "Order completed and user updated with PAID=true" });
    } else if (event === "order.canceled") {
      await setPaidStatus(email, false);
      res
        .status(200)
        .json({ message: "Order canceled and user updated with PAID=false" });
    } else {
      res.status(400).send("Event not supported");
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// Placeholder function to verify FastSpring's webhook signature
import crypto from "crypto";
function verifyFastspringSignature(
  rawBody: Buffer,
  signature: string,
): boolean {
  // Replace this with actual FastSpring signature verification logic
  return isValidSignature(rawBody, signature, "abc");
}
const isValidSignature = (
  rawBody: Buffer,
  signature: string,
  secret: string,
) => {
  const computedSignature = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest()
    .toString("base64");
  return signature === computedSignature;
};
