import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Values from "./components/Values/Values";
import Electricity from "./components/Electricity/Electricity";
import Cases from "./components/Cases/Cases";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Values />
      <Electricity />
      <Cases />
      <FAQ />
    </>
  );
}

export default App;
