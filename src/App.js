import Header from "./components/Header/Header";
import "../src/App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { randomIntFromInterval } from "./components/utils/ramdonNumberGenerator";

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
