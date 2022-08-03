import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "../Components/UserProfile";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  function login() {
    if (!isAuthenticated) {
      alert("You need to be logged first");
    }
  }

  // function getLocation(){
  //   window.navigator.getCurrentPosition((position)=>console.log(position), (err)=>{console.log(err)})
  // }
  return (
    <div>
      <div>
        <h1 className="text-black md:text-3xl text-2xl flex justify-center md:m-3 m-8 align-center">
          What are you waiting, book your first session
        </h1>

        {/* <button className="bg-black p-2 text-white" onClick={getLocation}>tap to get location</button> */}

        <div
          className="items-center align-center gap-3 justify-center md:flex grid-cols-1 mt-60 md:m-0"
          style={{ height: "25vw" }}
        >
          <div className="grid grid-flow-row md:flex justify-center h-auto align-center md:h-0">
            <Link to="/portfolio">
              <button className="text-lg md:relative group overflow-hidden hover:bg-transparent md:hover:text-white md:hover:bg-purple-600 hover:text-pink-600 px-6 h-12 rounded-full flex space-x-3 text-pink-900 md:text-white items-center duration-500 md:bg-pink-500 hover:bg-purple-600">
                View Work
              </button>
            </Link>
          </div>

          <div className="flex justify-center align-center md:h-0 m-10">
            <Link to={isAuthenticated ? "/book" : "/"}>
              <button
                onClick={login}
                className="md:relative group overflow-hidden px-6 h-12 rounded-full flex space-x-3 items-center duration-500 bg-pink-500 hover:bg-purple-600"
              >
                <span className="relative text-lg text-white">Get Started</span>
                <div className="flex items-center -space-x-3 translate-x-3">
                  <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="flex px-4 ">
        <button className="md:hidden h-14 w-14 rounded-full bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-700 transition">
          <span className="text-3xl text-white">+</span>
        </button>
      </div> */}
    </div>
  );
}

export default Home;
