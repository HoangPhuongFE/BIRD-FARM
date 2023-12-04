import crypto from "crypto";

const getRandomCode = () => {
  let rand: number = crypto.randomInt(10000, 99999);
  return rand.toString();
};

export default getRandomCode;
