import { useState } from "react";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

function App() {

  const [token, setToken] =
    useState(
      localStorage.getItem("token")
    );

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    setToken(null);

  };

  return (

    <div>

      {

        token ? (

          <div>

            <button onClick={logout}>
              Logout
            </button>

            <Dashboard
              token={token}
            />

          </div>

        ) : (

          <div>

            <Login
              setToken={setToken}
            />

            <hr />

            <Register />

          </div>

        )

      }

    </div>

  );

}

export default App;