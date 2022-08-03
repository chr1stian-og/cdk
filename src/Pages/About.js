import React from "react";

const aboutImage = require("../media/cdk group.jpeg");

function About() {
  return (
    <div>
      <h1 className="text-black md:text-3xl text-2xl flex justify-center md:m-3 m-8 align-center">
        About us
      </h1>
      <h4 className="text-black text-2xl flex justify-center m-20 align-center">
        We are a group of individuals trying to change your perspective of the
        world
      </h4>
      <div className="flex justify-center align-center m-20">
        <img src={aboutImage} alt="cdk group"></img>
      </div>

      <div className="flex-col bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center items-center">
        <h1 className="flex justifiy-center align-center text-4xl text-white ">
          Our team
        </h1>
        <div className="flex-col gap-2 justify-center align-center container w-96 m-5 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          <h1 className="text-white text-3xl">Christian</h1>
          <h1 className="text-white text-3xl">Aider</h1>
          <h1 className="text-white text-3xl">Dingane</h1>
        </div>
      </div>
    </div>
  );
}

export default About;
