import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérets</h3>
      <ul>
        <li className="hobby">
          <i className="fab fa-bitcoin"></i>
          <span>Crypto-monnaies</span>
        </li>
        <li className="hobby">
          <i class="fas fa-football-ball"></i>
          <span>Football Américain</span>
        </li>
        <li className="hobby">
          <i class="fas fa-baseball-ball"></i>
          <span>Base-ball </span>
        </li>
        <li className="hobby">
          <i class="fas fa-chess"></i>
          <span>Echec </span>
        </li>
        <li className="hobby">
          <i class="fas fa-mouse"></i>
          <span>Jeux-Video </span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
