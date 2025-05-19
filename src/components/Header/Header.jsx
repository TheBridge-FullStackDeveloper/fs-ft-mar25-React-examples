import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Nav from "./Nav";

// Importamos el contexto
import { UserContext } from "../../context/UserContext";

const Header = () => {
  // Consumir el contexto de usuario
  const { username, updateUsername } = useContext(UserContext);
  
  // Hook para navegar entre rutas
  const navigate = useNavigate();

  const handleOnClick = () => navigate("/"); // Redirige a la home

  return (
    <header className='header-day'>
      <Nav />

      {username ? 
        <>
          <span>Hola, {username}</span>
          <button onClick={() => updateUsername("")}>Logout</button>
        </>
       : 
        <button onClick={handleOnClick}>Login</button>
      }
    </header>
  );
};

export default Header;
