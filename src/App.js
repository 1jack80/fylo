import React from "react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Theme from "./theme/Theme";
import Features from "./Components/Features";
import AdSection from "./Components/AdSection";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <Theme>
      <Nav />
      <Header />
      <Features />
      <AdSection />
      <Testimonials />
      <Footer />
    </Theme>
  );
}

export default App;
