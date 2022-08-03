import React, { Component } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useAuth0 } from "@auth0/auth0-react";

function Contact() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  function contactForm(e) {
    if (isAuthenticated) {
      if (this.props.isLogged === true) {
        e.preventDefault();
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
        alert("User must be logged");
      }
    } else {
      alert("must be authenticated to perform operation");
      loginWithRedirect();
    }
  }
  return (
    <div>
      <h1 className="text-black md:text-3xl text-2xl flex justify-center md:m-3 m-8 align-center">
        Contact
      </h1>
      <form onSubmit={(e) => contactForm(e)}>
        <div className="mx-5 mb-10 mt-2">
          <div className="fields">
            <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center items-center">
              <div className="flex-col gap-2 justify-center align-center container w-96 m-5 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
                <div className="input-field">
                  <input type="text" name="subject" hidden></input>
                </div>
                <div className="input-field">
                  <label className="text-2xl text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="sm:mx-9 md:mx-9"
                    placeholder="enter your email"
                  ></input>
                </div>
                <div className="input-field">
                  <label className="text-2xl text-white">Message</label>
                  <textarea
                    name="message"
                    className="sm:mx-9 md:mx-9"
                    placeholder="send sum love..."
                  ></textarea>
                </div>
                <div className="flex justify-center align-center items-center">
                  <button className="sendBtn">send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
