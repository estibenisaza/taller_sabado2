import { useState } from "react";

import API from "../services/api";

const Login = ({ setToken }) => {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    try {

      const response =
        await API.post(
          "/auth/login",
          {
            email,
            password
          }
        );

      localStorage.setItem(

        "token",

        response.data.accessToken

      );

      setToken(
        response.data.accessToken
      );

      alert("Login exitoso");

    } catch (error) {

      console.log(error);

      alert("Error login");

    }

  };

  return (

    <div>

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>

  );

};

export default Login;