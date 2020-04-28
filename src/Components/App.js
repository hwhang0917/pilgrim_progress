import React from "react";
import Router from "./Router";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router />
      <GlobalStyles />
      <Footer />
    </>
  );
}

export default App;
