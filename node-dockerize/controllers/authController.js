import User from "../models/userModel.js";

export const singUp = async (user) => {
  try {
    const newUser = await User.create(req.body);
    resizeBy.status(201).json({
      status: "success",
      data: { user: newUser },
    });
  } catch (error) {
    resizeBy.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};
