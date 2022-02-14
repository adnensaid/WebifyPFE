import React from "react";
import { FormattedMessage } from "react-intl";
import { Banner, Expertise, SercicesPacks } from "./components/index";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Expertise />
      <SercicesPacks />
      {/*         <h2 className="title-section">
          <FormattedMessage id="app.header.navlink0" defaultMessage="" />
        </h2>
        
         */}
    </div>
  );
};
export default Home;
