import React from "react";
import {
  Banner,
  Expertise,
  SercicesPacks,
  Portfolio,
  Testimonials,
  Newsletter,
} from "./components/index";
const Home = () => {
  return (
    <>
      <Banner />
      <Expertise />
      <SercicesPacks />
      <Portfolio />
      <Testimonials />
      <Newsletter />
    </>
  );
};
export default Home;
