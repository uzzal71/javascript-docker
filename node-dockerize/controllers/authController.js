import User from "../models/userModel.js";

export const signUp = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: { user: newUser },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
    });
  }
};
