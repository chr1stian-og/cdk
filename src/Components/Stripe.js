import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3001" });

function Stripe() {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("Book");

  const handleToken = (token) => {
    const resp = api.post("/payment", { token, amount }).then(
      (resp) => {
        resp.json();
        alert("Transaction Sucessful.");
      },
      (err) => {
        alert("Error while processing Transaction.");
      }
    );
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setAmount(value);
  };

  return (
    <>
      <div className="container-full w-screen h-screen bg-gradient-to-br from-red-600 to-purple-500 flex items-center">
        <div className="container flex bg-black text-gray-300 h-screen items-center px-4">
          <div className="flex-col px-4">
            <h1
              className="text-2xl font-semibold text-center 
        bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
            >
              Pay With Stripe
            </h1>
            <small className="text-gray-400 text-center block">
              Enter credit card details
            </small>
            <hr className="opacity-20 mt-6 mb-8" />
            <input
              type="text"
              className="w-full py-2 mb-3 rounded-md ml-1.5 bg-gray-700 text-gray-200 px-2"
              placeholder="Account Holder"
            />
            <input
              type="number"
              min="0"
              className="w-full py-2 mb-3 rounded-md ml-1.5 bg-gray-700 text-gray-200 px-2"
              placeholder="Amount"
              onChange={handleAmountChange}
            />
            <input
              type="text"
              className="w-full py-2 mb-3 rounded-md ml-1.5 bg-gray-700 text-gray-200 px-2"
              placeholder="Card Number"
            />
            <div className="flex">
              <input
                type="text"
                className="py-2 w-1/2 rounded-md ml-1.5 bg-gray-700 text-gray-200 px-2"
                placeholder="Month"
              />
              <input
                type="text"
                className="py-2 w-1/2 rounded-md ml-1.5 bg-gray-700 text-gray-200 px-2"
                placeholder="Year"
              />
            </div>
            <div className="flex justifiy-center align-center">
              <StripeCheckout
                // stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
                stripeKey={
                  "pk_test_51L7uU9Jtm5kq7MiPUSrXYaafA418DreAV2SwRQR9v7sQiI7ni1a7S4BiPIPrvb5tNEdN4H7P39XJnOz1Gr68agJy004IQ9HoqP" ||
                  ""
                }
                className="btn-pay w-full mt-5 rounded-full px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-500"
                token={handleToken}
                name=""
                panelLabel={description}
                currency="USD"
                amount={amount * 100}
              ></StripeCheckout>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stripe;
