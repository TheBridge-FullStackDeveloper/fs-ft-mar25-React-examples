import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Staff from "./Staff";
import Topic from "./Topic";
import TravelList from "./TravelList";
import WishList from "./WishList";
import NotFound from "./NotFound";


const Main = () => {
  return (
    <main>
      Main
      {/* <TravelList /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/travel" element={<TravelList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
