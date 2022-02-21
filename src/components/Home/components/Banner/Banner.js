import React from "react";
import Style from "./Banner.module.scss";
import { FormattedMessage } from "react-intl";

const Banner = () => (
  <div className="container-fluid">
    <div className=" row">
      <div className=" col-lg-5 col-xs-12">
        <div className={Style.bannerText + " py-5"}>
          <h1 className="title text-uppercase mb-4">
            <FormattedMessage
              id="app.banner.title"
              defaultMessage="CRÉATION DE SITES WEB ET APPLICATION MOBILES SUR MESURE"
            />
          </h1>
          <p className="underline mb-4" />
          <p className="paragraph mb-4">
            <FormattedMessage
              id="app.banner.text"
              defaultMessage="Lorem ipsum dolor sit amet, consectutur adipiscing elit, sed do eiusmod tempor Ut enim ad Lorem ipsum dolor sit amet,"
            />
          </p>
          <button className="btn btn-primary">
            <FormattedMessage
              id="app.banner.btn"
              defaultMessage="Découvrez-nous!"
            />
          </button>
        </div>
      </div>
      <div className="col-lg-7 d-flex justify-content-end align-items-start p-0 col-sm-0">
        <div className={Style.bannerImg + " ratio ratio-1x1"}></div>
      </div>
    </div>
  </div>
);
export default Banner;
