import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RepositoryList.css";

const RepositoryList = ({ user, repos }) => {
  const navigate = useNavigate();

  return (
    <div className="repository-container">
      <div className="user-profile">
        <div className="user-info">
          <img src={user.avatar_url} alt={user.name} className="user-image" />
          <div className="user-details">
            <h2>{user.login}</h2>
            <p>{user.bio}</p>
          </div>
        </div>
        <div className="user-actions">
          <button onClick={() => navigate(`/followers/${user.login}`)}>
            View Followers
          </button>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      </div>

      <div className="repos-container">
        {repos.map((repo) => (
          <div className="repo-card" key={repo.name}>
            <Link to={`/repo/${repo.owner.login}/${repo.name}`}>
              <div className="repo-image-container">
                <img
                  src={repo.owner.avatar_url}
                  alt={repo.name}
                  className="repo-image"
                />
              </div>
              <div className="repo-info">
                <h3>{repo.name}</h3>
                <p>{repo.description || "No description available."}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;
