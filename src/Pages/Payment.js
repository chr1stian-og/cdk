import React from "react";
import Stripe from "../Components/Stripe";
import { useAuth0 } from "@auth0/auth0-react";

function Payment() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div className="flex justify-center flex-row m-5">
      {!isAuthenticated ? (
        <>
        <h1>Stripe Opened!</h1>
          <Stripe />
        </>
      ) : (
        <>
          <div className="bg-red-500 p-4 rounded-lg">
            <h1 className="text-3xl text-white">User is not Logged</h1>
            <div className="my-2 flex justify-center align-center">
              <button className="backBtn" onClick={loginWithRedirect}>
                Click to Log in
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Payment;
