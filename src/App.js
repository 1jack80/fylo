import React from "react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Theme from "./theme/Theme";
import Features from "./Components/Features";

function App() {
  return (
    <Theme>
      <Nav />
      <Header />
      <Features />
    </Theme>
  );
}

export default App;
