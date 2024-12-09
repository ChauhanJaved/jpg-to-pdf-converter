import { VALID_CHARS } from "@/data/website-data";
import { createHash } from "crypto";

const LICENSE_STRING = process.env.NEXT_PUBLIC_LICENSE_STRING || "";

function encryptStringMD5(input: string): string {
  try {
    const hash = createHash("md5").update(input, "utf8").digest("hex");
    return hash.padStart(32, "0");
  } catch (error) {
    console.error("Error in encryptStringMD5:", error);
    return "";
  }
}

function validateKey(pKey: string): boolean {
  try {
    // Step 1: Extract initial characters
    const initialChars = pKey.substring(0, 9); // First 9 characters of pKey

    // Step 2: Generate MD5 hash
    const sMD5 = encryptStringMD5(initialChars + LICENSE_STRING);
    
    // Step 3: Build the test key
    let testKey = initialChars;
    for (let count = 1; count <= 16; count++) {
      // Get the two-character hex value from the MD5 hash
      const hexValue = sMD5.substring((count - 1) * 2, count * 2);

      // Convert hex to a number and find modulo 32
      const longValue = parseInt(hexValue, 16) % 32;

      // Append the corresponding VALID_CHARS character to testKey
      testKey += VALID_CHARS.charAt(longValue);
    }

    // Step 4: Compare the generated test key with the input key
    return testKey === pKey;
  } catch (error) {
    console.error("Error in validateKey:", error);
    return false;
  }
}

export { encryptStringMD5, validateKey };
