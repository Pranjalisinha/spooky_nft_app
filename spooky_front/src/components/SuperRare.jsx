import React from "react";
import Card from "./Card";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";

export default function SuperRare() {
  const data = [
    {
      image: super1,
      series: "Gloop Series",
      title: "Purple Man",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super2,
      series: "Gloop Series",
      title: "Beige",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super3,
      series: "Gloop Series",
      title: "Red Man",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super4,
      series: "Gloop Series",
      title: "Green",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h1 className="title">PRODUCT</h1>
        <h1 style={{"textAlign":"left", "font-size":"2rem"}} className="title" >SPOOKY LIST</h1>
        <p className="description">
        A curated list of projects and people building on Aptos. Discover the best NFTs, DeFi applications, marketplaces and people to follow.
        </p>
        <p className="description">
        A complete suite of tracking tools with detailed statistics breakdown and historical data, including on-chain metrics, will be available only for Spooks' holders.
        </p>
      </div>
      <div className="cards">
       
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}