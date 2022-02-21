import React, { Component } from "react";
import Style from "./portfolio.module.scss";
import { FormattedMessage } from "react-intl";

import Filter from "./Filter/Filter";
import ProjectsList from "./ProjectsList/ProjectsList";
export default class Portfolio extends Component {
  render() {
    return (
      <section className=" py-5">
        <div className="container-small">
          <p className="title-section mb-4">
            <FormattedMessage
              id="app.home.titlePortfolio"
              defaultMessage="NOTRE PORTFOLIO"
            />
          </p>
          <h2 className="text-center title-secondary mb-4">
            <FormattedMessage
              id="app.home.titlePortfolio2"
              defaultMessage="NOS DERNIERS RÉALISATIONS"
            />
          </h2>
          <div className={Style.card + " card border-0"}>
            <div
              className={
                Style.cardHeader + " card-header bg-white border-0 p-0 m-0"
              }
            >
              <Filter />
            </div>
            <div className=" card-body p-0">
              <ProjectsList />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
