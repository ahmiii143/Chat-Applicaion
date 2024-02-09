import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filterUsers = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );
    return res.status(201).json(filterUsers);
  } catch (error) {
    console.log(error.message, "Error in user controller Server Error");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
