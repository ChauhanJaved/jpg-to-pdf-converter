import { createHash } from "crypto";

// Constants
const VALID_CHARS = "0123456789ABCDEFGHJKLMNPQRTUVWXY";
const LICENSE_STRING = "4D1XGNAX468BDWKWUWX37KQM5";
const RANDOM_LOWER = 0;
const RANDOM_UPPER = 31;

function getRandomInt() {
  return (
    Math.floor(Math.random() * (RANDOM_UPPER - RANDOM_LOWER + 1)) + RANDOM_LOWER
  );
}
function encryptStringMD5(input) {
  const hash = createHash("md5").update(input, "utf8").digest("hex");
  return hash.padStart(32, "0");
}
function generateKey() {
  let initialChars = "";
  for (let i = 0; i < 9; i++) {
    const randomIndex = getRandomInt();
    initialChars += VALID_CHARS[randomIndex];
  }

  const md5Hash = encryptStringMD5(initialChars + LICENSE_STRING);

  let key = initialChars;
  for (let i = 0; i < 16; i++) {
    const hexValue = parseInt(md5Hash.substring(i * 2, i * 2 + 2), 16);
    const modValue = hexValue % 32;
    key += VALID_CHARS[modValue];
  }

  return key;
}

function generateKeysBatch(count) {
  const keys = [];
  for (let i = 0; i < count; i++) {
    keys.push(generateKey());
  }
  return keys;
}

const keys = generateKeysBatch(10);
console.log("Generated Keys:", keys);

import { writeFileSync } from "fs";
writeFileSync("license_keys.txt", keys.join("\n"));
