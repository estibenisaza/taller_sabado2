import { useEffect, useState } from "react";

import API from "../services/api";

const Dashboard = ({ token }) => {

  const [libros, setLibros] =
    useState([]);

  useEffect(() => {

    const getLibros = async () => {

      try {

        const response =
          await API.get(
            "/libros",
            {
              headers: {

                Authorization:
                  `Bearer ${token}`

              }
            }
          );

        setLibros(
          response.data
        );

      } catch (error) {

        console.log(error);

      }

    };

    getLibros();

  }, [token]);

  return (

    <div>

      <h1>Dashboard</h1>

      {

        libros.map((libro) => (

          <div key={libro._id}>

            <h3>
              {libro.titulo}
            </h3>

          </div>

        ))

      }

    </div>

  );

};

export default Dashboard;