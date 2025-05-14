import { useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// Importar el contexto
import { UserContext } from "./context/UserContext";

function App() {

  const [username, setUsername] = useState("tortilla");

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };

  const userData = {
    username,
    updateUsername,
  };

  return (
    <>
      <UserContext.Provider value={userData}>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
        </UserContext.Provider>
        <Footer />
    </>
  );
}

export default App;
