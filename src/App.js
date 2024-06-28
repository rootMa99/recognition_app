import React from "react";
import "./App.css";
import NavBar from "./components/UI/NavBar";
import Login from "./components/login/Login";
import { useSelector } from "react-redux";
import FinalAssemblyRoutes from "./components/routes/FinalAsseblyRoutes";

function App() {
  const { isLoged } = useSelector((s) => s.login);

  return (
    <div className="App">
      <NavBar />

      {
        <React.Fragment>
          {!isLoged.login && <Login />}
          {isLoged.login && isLoged.role === "fa" && <FinalAssemblyRoutes />}
          {isLoged.login && isLoged.role === "cutting" && <FinalAssemblyRoutes />}
        </React.Fragment>
      }
    </div>
  );
}

export default App;
