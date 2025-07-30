// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css"

function App() {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <Menu />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
