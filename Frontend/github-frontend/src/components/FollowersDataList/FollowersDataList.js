import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./FolloweDataList.css";

const  FollowersDataList = () => {

  const [userdata, setUserdata] = useState(null);
  const [followers, setFollowers] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsersDataAndFollowers = async () => {
      try {
        const userResponse = await fetch(
          `https://api.github.com/users/${name}`
        );

        const userData = await userResponse.json();
        setUserdata(userData);

        const res = await fetch(userData.followers_url);
        const followersData = await res.json();
        setFollowers(followersData);

      } catch (error) {
        console.error("Fetching users and followers Error:", error);
      }
    };
    fetchUsersDataAndFollowers();
  }, [name]);

  const handleClick = (item) => {
    navigate(`/follower-repos/${item}`);
  };

  return (
    <div className="followersPage">
      <button onClick={() => navigate("/repo")} className="backButton">
        Back to List
      </button>

      {userdata ? (
        <div className="mainProfile">
          <div className="userProfile">
            <img
              src={userdata.avatar_url}
              alt={userdata.login}
              className="imagePic"
            />
            <div className="dataUser">
              <h2>{userdata.login}</h2>
              <p>{userdata.location || "Location not found"}</p>
              <p>{userdata.bio || "Bio not found"}</p>
            </div>
          </div>

          <div className="followersList">
            <h3>Followers List</h3>
            <ul>
              {followers.map((follower) => (
                <li
                  key={follower.login}
                  className="followerItem"
                  onClick={() => handleClick(follower.login)}
                >
                  <img
                    src={follower.avatar_url}
                    alt={follower.login}
                    className="followerPic"
                  />
                  <p>{follower.login}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Page is Loading...</p>
      )}
    </div>
  );
};

export default FollowersDataList;
