import React, { useEffect, useState } from "react";
import Router from "./routes/Router";
import { GlobalContext } from "./contexts/GlobalContext";
import axios from "axios";
import { Authorization, BASE_URL } from "./constants/constants";
//Para consumir um API:
//Criar o estado [useState]
//Criar o efeito colateral [useEffect]
//Função de requisição
//Lista sempre em plural

function App() {
  const [users, setUsers] = useState([]);

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(BASE_URL, {
        headers: {
          Authorization,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);

  const context = { users };
  return (
    <>
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
