import { useContext, useState } from 'react'
import { UserContext } from '../../../context/UserContext'
import reactLogo from "../../../assets/react.svg";

import "./Home.css";


const Home = () => {
  // Consumir el contexto de usuario
  const { updateUsername } = useContext(UserContext);

  const [newUsername, setNewUsername] = useState('');

  const handleInputChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUsername(newUsername); // Actualiza el nombre de usuario en el contexto
    setNewUsername(''); // Limpia el campo de entrada
  };

  return (
    <div>
      <h2>Home</h2>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" value={newUsername} onChange={handleInputChange} />
        <button type="submit">Envia tu nombre</button>
      </form>
    </div>
  );






};

export default Home;
