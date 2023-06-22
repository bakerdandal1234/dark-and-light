import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div className="myheader">
      <header className="hide-when-mobile baker">
        <h1>
          <Link to="/">baker dandal</Link>
        </h1>
        <button
          class="theme-btn"
          onClick={() => {
            changeTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme}
        </button>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>

            <ul className="sub-ul">
              <li>
                <a href="www">full course</a>
              </li>
              <li>
                <a href="www">Crash Course</a>
              </li>
              <li>
                <a href="www">learn in 1h</a>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/css">
              CSS
            </NavLink>
            <ul className="sub-ul">
              <li>
                <a href="www">Full Course</a>
              </li>
              <li>
                <a href="www">CSS Examples</a>
              </li>
              <li className="mini-projects">
                <a href="www">mini projects&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="www">project 1</a>
                  </li>
                  <li>
                    <a href="www">project 2</a>
                  </li>
                  <li>
                    <a href="www">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              JavaScript
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="www">coming soon🔥</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      <header className="show-when-mobile baker">
        <h1>abou_dandal8</h1>
        <button
          class="theme-btn"
          onClick={() => {
            changeTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme}
        </button>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="www">Full Course</a>
              </li>
              <li>
                <a href="www">Crash Course</a>
              </li>
              <li>
                <a href="www">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="www">Full Course</a>
              </li>
              <li>
                <a href="www">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="www">project 1</a>
                  </li>
                  <li>
                    <a href="www">project 2</a>
                  </li>
                  <li>
                    <a href="www">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="www">coming soon🔥</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
