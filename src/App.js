import React from "react";
import "./App.css";
import NavBar from "./components/UI/NavBar";
import Login from "./components/login/Login";
import { useSelector } from "react-redux";

function App() {
  const { isLoged } = useSelector((s) => s.login);

  return (
    <div className="App">
      <NavBar />

      {<React.Fragment>{!isLoged.login && <Login />}</React.Fragment>}
    </div>
  );
}

export default App;
