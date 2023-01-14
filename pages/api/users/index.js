import connectMongoDb from "../../../database/conn.js";
import { getUsers, createUser } from "../../../database/controller.js";

const handler = async (req, res) => {
  connectMongoDb().catch(() =>
    res.status(405).json({ error: "Error in the Connection " })
  );

  const { method } = req;
  switch (method) {
    case "GET":
      getUsers(req, res);
      break;
    case "POST":
      createUser(req, res);
      // res.status(200).json({ method, name: "POST Request" });
      break;
    case "PUT":
      res.status(200).json({ method, name: "PUT Request" });
      break;
    case "DELETE":
      res.status(200).json({ method, name: "DELETE Request" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "PATCH", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
export default handler;
