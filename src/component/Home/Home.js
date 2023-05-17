import React from "react";
import redCat from "../../images/redCat.mp4";
import "./Home.css";
import Header from "../layout/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="home_banner">
          <video src={redCat} autoPlay loop muted />

          <div className="home_banner_content"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
