import { React } from "react";
import { Link } from "react-router-dom";

const videoImage = require("../media/camera-lens-filming-film.jpg");
const photoImage = require("../media/ailbhe-flynn-jkZs3Oi9pq0-unsplash.jpg");

function Services() {
  return (
    <div>
      <h1 className="text-black text-3xl flex justify-center m-3 align-center">
        Services
      </h1>

      <div className="flex justify-center align-center m-4">
        <img src={videoImage}></img>
      </div>
      <ul className="flex flex-col gap-2 justify-centert align-center items-center">
        <li>
          <Link to="/services" style={{ textDecoration: "none" }}>
            <h1 className="text-3xl font-bold hover:cursor-pointer hover:text-pink-500 duration-500 hover:translate-y-[-1px] transition-all">Photography</h1>
          </Link>
        </li>
        <li>
          <Link to="/services" style={{ textDecoration: "none" }}>
            <h1 className="text-3xl font-bold hover:cursor-pointer hover:text-pink-500 duration-500 hover:translate-y-[-1px] transition-all">videography</h1>
          </Link>
        </li>
        <li>
          <Link to="/services" style={{ textDecoration: "none" }}>
            <h1 className="text-3xl font-bold hover:cursor-pointer hover:text-pink-500 duration-500 hover:translate-y-[-1px] transition-all">Film Making</h1>
          </Link>
        </li>
        <li>
          <Link to="/services" style={{ textDecoration: "none" }}>
            <h1 className="text-3xl font-bold hover:cursor-pointer hover:text-pink-500 duration-500 hover:translate-y-[-1px] transition-all">video and photo Editing</h1>
          </Link>
        </li>
      </ul>

      <h1 className="mx-5 lg:mx-64 md:mx-20 sm:mx-20 mt-20 flex justify-center align-center text-2xl text-black">
        We offer photography and videography services.
      </h1>
      <h1 className="mx-5 lg:mx-64 md:mx-20 sm:mx-20 flex justify-center align-center text-2xl text-black">
        We like to take picture of models and artists to help them share their
        artistics point of view throught our lenses.
      </h1>
      <div className="flex justify-center align-center">
        <img src={photoImage}></img>
      </div>
    </div>
  );
}

export default Services;
