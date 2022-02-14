import React, { Component } from "react";
import Style from "./Banner.module.scss";
import banner from "../../../../assets/images/banner.png";
import { FormattedMessage, FormattedDate } from "react-intl";

export default class Banner extends Component {
  render() {
    return (
      <div className={Style.banner + " page"}>
        <div className="container-fluid">
          <section className={Style.card}>
            <h1 className={Style.cardTitle}>
              <FormattedMessage
                id="app.banner.title"
                defaultMessage="CRÉATION DE SITES WEB ET APPLICATION MOBILES SUR MESURE"
              />
            </h1>
            <div className={Style.underline + " underline"}></div>
            <p className="paragraph">
              <FormattedMessage
                id="app.banner.text"
                defaultMessage="Lorem ipsum dolor sit amet, consectutur adipiscing elit, sed do eiusmod tempor Ut enim ad Lorem ipsum dolor sit amet,"
              />
            </p>
            <a href="#" className="btn btn-primary">
              Découvrez-nous!
            </a>
          </section>
        </div>
      </div>
    );
  }
}
