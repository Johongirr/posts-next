import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout__container">{children}</div>
      <Footer />
    </div>
  );
}
