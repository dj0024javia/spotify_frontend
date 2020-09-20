import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayer } from './DataLayer';

function App() {

  const spotify = new SpotifyWebApi()

  // const [token1, setToken1] = useState('')
  const [{ user, token }, dispatch] = useDataLayer()


  useEffect(() => {

    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token

    console.log("Token Received:", token)
    if (token) {
      // setToken(token)
      spotify.setAccessToken(token)

      spotify.getMe().then(user => {
        console.log("User from Spotify:", user)
        dispatch({
          type: "SET_USER",
          user: user
        })
      })
    }

  }, [])
  console.log(user)

  return (
    <div className="App">
      {
        token ? (
          <h1>Logged In</h1>
        ) : (
            <Login />
          )
      }

      {/* Agreement Screen */}
      {/* HomePage */}
    </div>
  );
}

export default App;
