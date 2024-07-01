import React from "react";
import "./App.css";
import NavBar from "./components/UI/NavBar";
import Login from "./components/login/Login";
import { useSelector } from "react-redux";
import FinalAssemblyRoutes from "./components/routes/FinalAsseblyRoutes";
import CuttingRoutes from "./components/routes/CuttingRoutes";
import HerosRoutes from "./components/routes/HerosRoutes";
import MpcRoutes from "./components/routes/MpcRoutes";

function App() {
  const { isLoged } = useSelector((s) => s.login);
  console.log(isLoged);
  return (
    <div className="App">
      <NavBar />

      {
        <React.Fragment>
          {!isLoged.login && <Login />}
          {isLoged.login && isLoged.role === "fa" && <FinalAssemblyRoutes />}
          {isLoged.login && isLoged.role === "cutting" && <CuttingRoutes />}
          {isLoged.login && isLoged.role === "lean" && <HerosRoutes />}
          {isLoged.login && isLoged.role === "mpc" && <MpcRoutes />}
        </React.Fragment>
      }
    </div>
  );
}

export default App;
