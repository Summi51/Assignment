const axios = require("axios");

const User = require("../models/user.models");

require("dotenv").config();

const token = process.env.token;

const UserData = async (req, res) => {
  const { username } = req.params;

  try {
    const userAuto = username.trim();

    let existingUser = await User.findOne({
      username: userAuto,
    });

    if (existingUser) {
      if (!existingUser.deleted) {
        return res.status(200).json({
          message: "User already exists and is not deleted.",
          user: existingUser,
        });
      } else {
        ser;
        existingUser.deleted = false;
        await existingUser.save();

        return res.status(200).json({
          message: "User exists but was deleted. User has been restored.",
          user: existingUser,
        });
      }
    }

    const response = await axios.get(
      `https://api.github.com/users/${userAuto}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );
    const userData = response.data;


    const newUser = new User({
      username: userData.login,
      location: userData.location,
      bio: userData.bio,
      followers: userData.followers,
      following: userData.following,
      repositories: userData.repos_url,
      created_at: new Date(userData.created_at),
      deleted: false,
      followers_url: userData.followers_url,
      following_url: userData.following_url,
    });

    await newUser.save();

    res.status(201).json({
      message: "User data saved successfully.",
      user: newUser,
    });
  } catch (error) {
    console.log(error.message);
    if (error.code === 11000) {
      return res.status(400).json({
        message: "User already exists here, Duplicate username.",
      });
    }

    res.status(500).json({ message: error.message });
  }
};

const findFollowers = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({
      username: { $regex: new RegExp("^" + username + "$", "i") },
    });

    if (!user || user.deleted) {
      return res.status(404).json({ message: "User not found" });
    }

    const followersResponse = await axios.get(user.followers_url);

    const followingUrl = user.following_url.replace("{/other_user}", "");

    const followingResponse = await axios.get(followingUrl);

    const followers = followersResponse.data.map((f) => f.login);
    const following = followingResponse.data.map((f) => f.login);

    const mutualFollowers = followers.filter((f) => following.includes(f));

    res.status(200).json({ mutualFollowers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const searchUsers = async (req, res) => {
  try {
    const query = req.query;
    const searchQuery = { deleted: false };

    if (query.username) {
      searchQuery.username = new RegExp(`^${query.username}$`, "i");
    }

    console.log("Search query:", searchQuery);

    const users = await User.find(searchQuery);

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found." });
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const DeleteUser = async (req, res) => {
  const { username } = req.params;
  try {
    const result = await User.findOneAndDelete({
      username: new RegExp(`^${username}$`, "i"),
    });

    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User deleted successfully", user: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUserData = async (req, res) => {
  const { username } = req.params;
  const updatedData = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { username: new RegExp(`^${username}$`, "i") },
      updatedData,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsersSorted = async (req, res) => {
  const { sortBy = "created_at" } = req.query;
  try {
    const users = await User.find({ deleted: false }).sort({
      [sortBy]: 1,
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  UserData,
  findFollowers,
  searchUsers,
  DeleteUser,
  updateUserData,
  getUsersSorted,
};
