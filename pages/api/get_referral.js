
import axios from "axios";

const handler = async (req, res) => {
  if (req.method !== "POST") res.status(404).send("Cannot access an API page.");
  const jsonbin = process.env.NEXT_PUBLIC_JSONBIN_URI
  const keyFirst = "$2b$10$7aVmVzUhEWgpa7IxiTztfO";
  const axiosHeaders = {
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": keyFirst + process.env.NEXT_PUBLIC_JSONBIN_TOKEN
    }
  };
  const data = JSON.stringify({ lastEmail: req.body })
  const response = await axios.put(jsonbin, data, axiosHeaders);
  if (!!response.OK) res.status(512).json({ code: null, message: response.error })
  const referral = 'https://ratepunk.com/referral';

  res.status(200).json({ code: referral, message: "Your email is confirmed!" })
}
export default handler;
