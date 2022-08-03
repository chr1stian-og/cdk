import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Contract() {
  const {loginWithRedirect, isAuthenticated} = useAuth0();

  function openContract() {
    // var blur = document.getElementById("blur");
    // blur.classList.toggle("active");
    // var popup = document.getElementById("popup");
    // popup.classList.toggle("active");
  }
  return (
    <>
      <div id="popup">
        <h2 className="text-cyan-600 text-3xl font-bold">Scope of work</h2>
        <h3 className="text-black">
          This contract is for services and products related to a photography
          shoot (hereafter “shoot” or “the shoot”) to take place at the
          following time and place. PHOTOGRAPHER and CLIENT are to arrive for
          the SHOOT at ____________(time) at _________________________(place).
          PHOTOGRAPHER agrees to provide no fewer than ______________ photos for
          CLIENT to view after the shoot, and is not required to provide more
          than this number of images. PHOTOGRAPHER will perform basic
          post-processing or digital image editing services on these photos
          where artistically necessary.
        </h3>
        <div className="flex flex-row justify-between mx-5">
          <button className="backBtn" onClick={openContract()}>
            close
          </button>
          <Link
            to={isAuthenticated === true ? "/payment" : loginWithRedirect()}
            style={{ textStyle: "none" }}
            className="backBtnLink"
          >
            <button className="backBtn">Agree</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contract;
