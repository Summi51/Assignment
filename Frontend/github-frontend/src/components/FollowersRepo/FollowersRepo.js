import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./FollowersRepo.css";

const FollowerRepo = () => {
  const { followAccess } = useParams();
  const [repos, setRepos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${followAccess}/repos`
        );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, [followAccess]);

  return (
    <div className="followerRepo">
      <button
        onClick={() => navigate(`/followers/${followAccess}`)}
        className="back-button"
      >
        Back to Followers List Repositories
      </button>

      <h1>Repositories of {followAccess}</h1>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id} className="repoItem">
            <span className="repo-name">{repo.name}</span>
            <span className="repo-description">
              {repo.description || "No description available."}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowerRepo;
