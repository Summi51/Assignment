import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./FormData.css";

const FormData = ({ setUserData, setRepos }) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const response = await axios.post(
        `https://autonomizebackend.onrender.com/api/save-user/${username}`
      );

      toast.success(response.data.message || "User saved successfully.");

      const userResponse = await axios.get(
        `https://api.github.com/users/${username}`
      );

      const reposResponse = await axios.get(userResponse.data.repos_url);

      setUserData(userResponse.data);
      setRepos(reposResponse.data);

      setUsername("");
      navigate("/repo");
    } catch (error) {
      
      if (error.response?.status === 404) {
        toast.error("GitHub user not found.");
      } else {
        toast.error(
          error.response?.data?.message || "An error occurred. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formData">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Your GitHub Username"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Search"}
        </button>
      </form>
    </div>
  );
};

export default FormData;
