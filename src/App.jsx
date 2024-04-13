import React from "react";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Reviews from "./components/reviews";
import Attributes from "./components/attributes";
import Perks from "./components/perks";
import Extensive from "./components/extensive";
import Optimize from "./components/optimize";
import Brands from "./components/brands";
import Quote from "./components/quote";
import Study from "./components/study";
import Support from "./components/support";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Reviews />
      <Attributes />
      <Perks />
      <Extensive />
      <Optimize />
      <Brands />
      <Quote />
      <Study />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
