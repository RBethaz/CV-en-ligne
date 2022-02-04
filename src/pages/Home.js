import React from "react";
import Naviguation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Naviguation />
      <div className="homeContent">
        <div className="content">
          <h1>Bethaz Raphael</h1>
          <h2>Developpeur Full Stack</h2>
          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank">
              Telecharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
