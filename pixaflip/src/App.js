import "./App.css";
import React from "react";

import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import Main from "./components/Main/Index";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
