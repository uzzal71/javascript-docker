import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username must have a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password must have a password"],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
