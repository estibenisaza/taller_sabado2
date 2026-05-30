import { useState } from "react";

import API from "../services/api";

const Register = () => {

  const [nombre, setNombre] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    try {

      await API.post(
        "/auth/register",
        {
          nombre,
          email,
          password
        }
      );

      alert(
        "Usuario registrado"
      );

    } catch (error) {

      console.log(error);

      alert("Error registro");

    }

  };

  return (

    <div>

      <h1>Register</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) =>
            setNombre(
              e.target.value
            )
          }
        />

        <br />

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
          Registrar
        </button>

      </form>

    </div>

  );

};

export default Register;