import React from "react";
import Home from "../Pages/Home";
import Contract from "../Components/Contract";
import Login from "../Pages/Login";
import Payment from "../Pages/Payment";
import Book from "../Pages/Book";
import Reservations from "../Pages/Reservations";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import About from "../Pages/About";
import Portfolio from "../Pages/Portfolio";
import Display from "../Pages/Display";
import Location from "../Pages/Location";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes(props) {
  //attention here!! (I think the location const was used by the AnimatePresence)
  const location = useLocation();
  return (
    <>
      <AnimatePresence location={location.pathname}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/book/*" element={<Book />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contract/*" element={<Contract />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/display" element={<Display />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/payment/*" element={<Payment />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;
