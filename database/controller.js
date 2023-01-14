// Controller ?/
import Users from "../model/user";

// ? get all users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});

    if (!users) return res.status(404).json({ error: "Data not fond" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "GET While fecthing Data" });
  }
}

// ? POST create a user

export async function createUser(req, res) {
  try {
    const formData = req.body;
    if (!formData) {
      return res.status(404).json({ error: "Form Data Not Provided" });
    }
    Users.create(formData, function (error, data) {
      return res.status(200).json(data);
    });
    // const user = await user.create(formData);
  } catch (error) {
    return res.status(404).json({ error });
  }
}
