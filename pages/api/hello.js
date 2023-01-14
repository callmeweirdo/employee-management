// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongoDb from "../../database/conn.js";
export default function handler(req, res) {
  connectMongoDb();
  res.status(200).json({ name: "John Doe" });
}
