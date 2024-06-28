import { NavLink } from "react-router-dom";
import c from "./NavBar.module.css";
import imglogo from "../../assets/aptiv-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { loginActions } from "../../store/loginSlice";

const NavBar = (p) => {
  const { isLoged } = useSelector((s) => s.login);

  const dispatch = useDispatch();
  return (
    <div className={c.navBar}>
      <div className={c.logo}>
        <NavLink to="/home">
          <img src={imglogo} alt="logo for aptiv" />
        </NavLink>
      </div>
      {isLoged.login && (
        <div className={c.links}>
          <ul>
            <li style={{ color: "#f84018", fontWeight: "600" }}>
              Wellcome
              {" " + isLoged.userName}
            </li>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? c.activeLink : c.link)}
              >
                home
              </NavLink>
            </li>
            <li
              onClick={() => {
                dispatch(loginActions.logout());
              }}
            >
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? c.activeLink : c.link)}
                style={{ color: "red" }}
              >
                logout
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default NavBar;
