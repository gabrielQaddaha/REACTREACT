import React from "react";
import "./../css/dashboard.css";
import Stack from "react-bootstrap/Stack";
import SpotifyLogo from "./../images/spotify-logo.png";

const Spotify = () => {
  return (
    <div className="spotify">
      <div className="spotify_ban">
        <img className="logo" src={SpotifyLogo} alt="Spotify Logo" />
        <div>
          <h1>Spotify</h1>
        </div>
      </div>

      <Stack gap={1}>
        <iframe
          src="https://open.spotify.com/embed/track/4Z9CNGHElj2rLkB8mQdvnA"
          width="470"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </Stack>
      <hr />
    </div>
  );
};

export default Spotify;
