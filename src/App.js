import React from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import NavigationBar from "./components/NavigationBar";
import WhatWeWork from "./components/WhatWeWork";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <HeroBanner />
      <Features />
      <WhatWeWork />
      <Footer />
    </div>
  );
};

export default App;
