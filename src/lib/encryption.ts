import CryptoJS from "crypto-js";

const secretKey = process.env.NEXT_PUBLIC_USER_STRING;

if (!secretKey) {
  throw new Error("Missing encryption secret key");
}

export const encryptData = (data: string) => {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
};

export const decryptData = (encryptedData: string) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};
