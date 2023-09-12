import React from "react";
import { Container } from "react-bootstrap";
import querystring from "query-string";

const AuthURL =
  "https://accounts.spotify.com/authorize?" +
  querystring.stringify({
    response_type: "code",
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    scope:
      "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state",
    redirect_uri: "http://localhost:3000",
  });

const Login = () => {
  return (
    <Container
      style={{ minHeight: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <a className="btn btn-success btn-lg" href={AuthURL}>
        Login With Spotify
      </a>
    </Container>
  );
};

export default Login;

//
