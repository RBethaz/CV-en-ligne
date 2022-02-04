import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3> Desole cette page n'est pas disponible</h3>
        <NavLink exact to="/">
          <i className="fas fa-home"></i>
          <span> Acceuil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
