import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import FormData from "./components/FormData/FormData";
import RepositoryDetails from "./components/RepositoryDetails/RepositoryDetails";
import FollowersDataList from "./components/FollowersDataList/FollowersDataList";
import FollowerRepo from "./components/FollowersRepo/FollowersRepo";
import RepositoryList from "./components/RepositoryList/RepositoryList"

const App = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const location = useLocation();

  return (
    <div className="app">
      {location.pathname === "/" && (
        <FormData setUserData={setUserData} setRepos={setRepos} />
      )}
      <Routes>
        {userData && (
          <>
            <Route
              path="/repo"
              element={<RepositoryList user={userData} repos={repos} />}
            />
            <Route path="/repo/:owner/:repoHub" element={<RepositoryDetails />} />
            <Route
              path="/followers/:name"
              element={<FollowersDataList followersUrl={userData.followers_url} />}
            />
            <Route
              path="/follower-repos/:followAccess"
              element={<FollowerRepo />}
            />
          </>
        )}
      </Routes>
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
