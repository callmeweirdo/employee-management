import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  avatar: String,
  email: String,
  salary: Number,
  data: String,
  status: String,
});

const Users = models.user || model(`user`, userSchema);
export default Users;
