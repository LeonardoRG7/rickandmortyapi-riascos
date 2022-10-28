import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
  return (
    <div className="Header py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col">
            <h1>Rick and Morty | RiascosDev</h1>
          </div>
          <div className="col">
            <button type="button" className="bg-transparent text-success border-0" onClick={() => props.onClick()}>
              {props.darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
