import React, { useState } from 'react';
import axios from 'axios';

const SearchUser: React.FC = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState<any>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/api/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <img src={userData.avatar_url} alt="avatar" />
          <p>Location: {userData.location}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default SearchUser;
