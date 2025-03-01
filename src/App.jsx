import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Message from "./components/Message";
import Profile from "./components/Profile";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Programs />
      <Profile />
      <Message />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
