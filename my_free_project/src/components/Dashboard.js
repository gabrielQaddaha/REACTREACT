import React from "react";
import "./../css/dashboard.css";
import Stack from "react-bootstrap/Stack";
import Spotify from "./spotify";
import NewsFeed from "./News";
import {Weather} from "./Weather";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Stack gap={2}>
        <br />
        <div>
          <Spotify />
        </div>
        <br />
        <div>
          <NewsFeed />
        </div>
        <br />
        <div>
          <Weather />
        </div>
      </Stack>
    </div>
  );
};

export default Dashboard;
