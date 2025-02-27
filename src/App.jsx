import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Programs from "./components/Programs";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Programs />
    </>
  );
}

export default App;
