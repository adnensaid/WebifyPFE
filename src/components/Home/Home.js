import React from "react";
import { FormattedMessage } from "react-intl";
import {
  Banner,
  Expertise,
  SercicesPacks,
  Portfolio,
  Test,
} from "./components/index";
const Home = () => {
  return (
    <>
      <Banner />
      <Expertise />
      <SercicesPacks />
      {/*
                  
      
      <Banner />
      <Expertise />
      
      <Portfolio />      
       
 */}
    </>
  );
};
export default Home;
