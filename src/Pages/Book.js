import React, { useEffect, useState } from "react";
import Contract from "../Components/Contract";
import axios from "axios";
import emailjs from "emailjs-com";
import "../input-style.css";
import { useAuth0 } from "@auth0/auth0-react";

const pdfFile = require("../media/short photography contract.pdf");
const api = axios.create({ baseURL: "http://localhost:3001" });

function Book() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const [data, setData] = useState({
    timeInicio: "",
    timeFim: "",
    place: "",
    imageNumber: "50",
    resolution: "medium",
    type: "personal",
    price: "0",
  });

  function handleForm(e) {
    // var preco = document.querySelector(".price");
    var preco = document.getElementById(".price");
    data.resolution === "medium"
      ? (preco.value = "50" + setData({ [preco]: "50" }))
      : console.log("high");
    const dataToSend = data;
    dataToSend[e.target.id] = e.target.value;
    // data.resolution === "Medium"
    //   ? (document.querySelector(".price").value = "232420")
    //   : (document.querySelector(".price").value = 50 * 50);

    console.log(dataToSend);
    setData({ ...dataToSend });
  }

  function openContract() {
    // if (!isAuthenticated) {
    //   alert("User must be logged");
    //   return "User must be logged";
    // } else {
    //   var blur = document.getElementById("blur");
    //   blur.classList.toggle("active");
    //   var popup = document.getElementById("popup");
    //   popup.classList.toggle("active");
    // }
  }

  function setStateData() {
    const info = {
      timeInicio: data.timeInicio,
      timeFim: data.timeFim,
      place: data.place,
      imageNumber: data.imageNumber,
      resolution: data.resolution,
      type: data.type,
      price: data.price,
    };
    return info;
  }

  function sendData(info) {
    if (isAuthenticated) {
      const resp = api.post("/setDetails", info).then(
        (resp) => {
          console.log("Data Saved sucessfully");
        },
        (err) => {
          console.log("Error while saving", err.text);
        }
      );
    } else {
      alert("You need to login first");
      loginWithRedirect();
    }
  }

  function submitForm(e) {
    // document.getElementById("message").value = JSON.stringify(data);
    const info = setStateData();
    if (sendData(info)) {
      e.eventDefault();
      emailjs
        .sendForm(
          "service_uaxwktv",
          "template_zhmszrn",
          e.target,
          "QXKIOsJR522n30JF-"
        )
        .then(
          (result) => {
            console.log("Code: ", result, "Email Sent");
          },
          (error) => {
            console.log("Error while Sending email", error.text);
          }
        );
    } else {
      alert("Error while submiting form");
    }
  }

  function openPdf() {
    console.log("opened");
    window.open(pdfFile, "_self");
  }

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, []);

  return (
    <div>
      <script src="input-script.js"></script>
      <div className="content">
        <h1 className="text-black md:text-3xl text-2xl flex justify-center md:m-3 m-8 align-center">
          Booking page
        </h1>
        <form
          id="submitData"
          onSubmit={(e) => submitForm(e)}
          className="mx-5 mb-10 mt-2 "
        >
          <input
            type="text"
            name="subject"
            onChange={(e) => handleForm(e)}
            value="CDK"
            hidden
          ></input>

          <div className="container flex align-center justify-center bg-white text-gray-300 h-screen items-center px-4">
            <div className="flex-col px-4">
              <h1
                className="text-3xl font-bold text-center 
            bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
              >
                Schedule your meeting with CDK
              </h1>

              <small className="text-gray-400 text-center block">
                fill the fields
              </small>

              <hr className="opacity-20 mt-6 mb-8" />
              <input
                maxLength="30"
                type="text"
                className="w-full py-2 mb-3 rounded-md ml-1.5 bg-gray-700 text-gray-200 px-2"
                placeholder="Enter the location"
                value={data.place}
                id="place"
                onChange={(e) => handleForm(e)}
              />
              <input
                type="time"
                id="timeInicio"
                className="w-full py-2 mb-3 rounded-md ml-1.5 bg-gray-700 text-gray-200 px-2"
                placeholder="Enter time"
                onChange={(e) => handleForm(e)}
              />
              <input
                type="time"
                id="timeFim"
                className="w-full py-2 mb-3 rounded-md ml-1.5 bg-gray-700 text-gray-200 px-2"
                placeholder="Enter time"
                onChange={(e) => handleForm(e)}
              />
              <div className="flex">
                <select
                  id="imageNumber"
                  value={data.imageNumber}
                  type="text"
                  className="w-full py-2 mb-3 rounded-md ml-1.5 bg-gray-700 text-gray-200 px-2"
                  onChange={(e) => handleForm(e)}
                >
                  <option>50</option>
                  <option>150</option>
                  <option>350</option>
                  <option>500</option>
                </select>
                <select
                  id="resolution"
                  value={data.resolution}
                  type="text"
                  className="py-2 w-1/2 rounded-md ml-2 bg-gray-700 text-gray-200 px-2"
                  onChange={(e) => handleForm(e)}
                >
                  <option>medium</option>
                  <option>high</option>
                  <option disabled>ultra high</option>
                </select>
                <select
                  id="type"
                  value={data.type}
                  type="text"
                  className="py-2 w-1/2 rounded-md ml-2 bg-gray-700 text-gray-200 px-2"
                  onChange={(e) => handleForm(e)}
                >
                  <option>Personal</option>
                  <option>Business</option>
                  <option>Other</option>
                </select>
                <input
                  className="py-2 w-1/2 rounded-md ml-2 bg-gray-700 text-gray-200 px-2"
                  // className="price"
                  type="text"
                  id="price"
                  placeholder="$"
                  min="10"
                  max="500"
                  value={data.price}
                  style={{ width: "175px", fontSize: "15px" }}
                  disabled
                  onChange={(e) => handleForm(e)}
                />
              </div>
              <button
                onClick={openContract}
                className="btn-pay w-full mt-5 rounded-full px-6 py-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:bg-purple-600 text-white duraton-500"
              >
                Book
              </button>
            </div>
          </div>
        </form>
      </div>
      <h1
        onClick={() => window.open(pdfFile, "_self")}
        className="flex justify-left align-left duration-1000 text-1xl text-pink-900 hover:text-pink-600 hover:cursor-pointer"
      >
        View Contract
      </h1>
      <Contract />
    </div>
  );
}

export default Book;
