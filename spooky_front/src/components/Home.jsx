import React from "react";
import home from "../assets/home.png";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <h1 className="title">An NFT like no other</h1>
          <p className="description">
          Web3 brand focused on community and tracking tools for the Aptos ecosystem
          </p>
          <a href="#about">Learn More</a>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home"/>
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}