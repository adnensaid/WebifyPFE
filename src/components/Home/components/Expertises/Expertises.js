import React, { Component } from "react";
import icon3 from "../../../../assets/images/icon3.png";
import icon4 from "../../../../assets/images/icon4.png";
import icon5 from "../../../../assets/images/icon5.png";
import icon6 from "../../../../assets/images/icon6.png";
import icon7 from "../../../../assets/images/icon7.png";
import Style from "./Expertises.module.scss";
import { FormattedMessage, FormattedDate } from "react-intl";

export default class Expertises extends Component {
  render() {
    return (
      <section className={Style.expertises + " section"}>
        <p className="title-section">
          <FormattedMessage
            id="app.home.titleExpertises"
            defaultMessage="NOS EXPERTISES"
          />
        </p>
        <div className="container">
          <div className={Style.expertisesContent}>
            <div className={Style.expertiseElem}>
              <img src={icon3} alt="icon" className="img-thumbnail border-0" />
              <p className={Style.textExpertise}>
                <FormattedMessage
                  id="app.home.expertiseElem0"
                  defaultMessage="RESPONSIVE DESIGN"
                />
              </p>
            </div>
            <div className={Style.expertiseElem}>
              <img src={icon4} alt="icon" className="img-thumbnail border-0" />
              <p className={Style.textExpertise}>
                <FormattedMessage
                  id="app.home.expertiseElem1"
                  defaultMessage="CONSEILS"
                />
              </p>
            </div>
            <div className={Style.expertiseElem}>
              <img src={icon5} alt="icon" className="img-thumbnail border-0" />
              <p className={Style.textExpertise}>
                <FormattedMessage
                  id="app.home.expertiseElem2"
                  defaultMessage="CMS"
                />
              </p>
            </div>
            <div className={Style.expertiseElem}>
              <img src={icon6} alt="icon" className="img-thumbnail border-0" />
              <p className={Style.textExpertise}>
                <FormattedMessage
                  id="app.home.expertiseElem3"
                  defaultMessage="DEVELOPPEMENT"
                />
              </p>
            </div>
            <div className={Style.expertiseElem}>
              <img src={icon7} alt="icon" className="img-thumbnail border-0" />
              <p className={Style.textExpertise}>
                <FormattedMessage
                  id="app.home.expertiseElem4"
                  defaultMessage="WEB DESIGN"
                />
              </p>
            </div>
          </div>
          <div className="text-center">
            <button href="#" className={Style.btnDetail + " btn btn-primary"}>
              <FormattedMessage
                id="app.home.expertiseBtn"
                defaultMessage="Voir tous !"
              />
            </button>
          </div>
        </div>
      </section>
    );
  }
}
