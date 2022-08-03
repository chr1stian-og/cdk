import React from "react";

const image1 = require("../media/image1.jpg");
const image2 = require("../media/image2.jpg");
const image3 = require("../media/image3.jpg");
const image4 = require("../media/image4.jpg");
const image5 = require("../media/image5.jpg");
const image6 = require("../media/image6.jpg");
const image7 = require("../media/image7.jpg");
const image8 = require("../media/image8.jpg");
const image9 = require("../media/image9.jpg");
const image10 = require("../media/image10.jpg");

function Portfolio() {
  return (
    <div>
      <div className="flex flex-col item-center justify-center w-fullp-2 bg-black h-auto">
        <h1 className="flex justify-center align-center text-3xl my-4 font-bold text-white uppercase">Portfolio</h1>
        <div className="flex justify-center align-center my-6">
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-2 p-2 rounded-md h-auto bg-pink-900">
            <img src={image1} width="200px" />
            <img src={image2} width="200px" />
            <img src={image3} width="200px" />
            <img src={image4} width="200px" />
            <img src={image5} width="200px" />
            <img src={image6} width="200px" />
            <img src={image7} width="200px" />
            <img src={image8} width="200px" />
            <img src={image9} width="200px" />
            <img src={image10} width="200px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
