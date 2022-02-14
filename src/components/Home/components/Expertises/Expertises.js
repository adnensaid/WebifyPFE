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
      <section className={Style.expertises}>
        <div className="container">
          <p className="title-section">
            <FormattedMessage
              id="app.home.titleExpertises"
              defaultMessage="NOS EXPERTISES"
            />
          </p>
          <ul className={Style.expertisesContent}>
            <li className={Style.expertiseElem}>
              <img src={icon3} alt="icon" className="img-thumbnail border-0" />
              <p className={Style.textExpertise}>
                <FormattedMessage
                  id="app.home.expertiseElem0"
                  defaultMessage="RESPONSIVE DESIGN"
                />
              </p>
            </li>
            <li className={Style.expertiseElem}>
              <img src={icon4} alt="icon" className="img-thumbnail border-0" />
              <p className={Style.textExpertise}>
                <FormattedMessage
                  id="app.home.expertiseElem1"
                  defaultMessage="CONSEILS"
                />
              </p>
            </li>
            <li className={Style.expertiseElem}>
              <img src={icon5} alt="icon" className="img-thumbnail border-0" />
              <p className={Style.textExpertise}>
                <FormattedMessage
                  id="app.home.expertiseElem2"
                  defaultMessage="CMS"
                />
              </p>
            </li>
            <li className={Style.expertiseElem}>
              <img src={icon6} alt="icon" className="img-thumbnail border-0" />
              <p className={Style.textExpertise}>
                <FormattedMessage
                  id="app.home.expertiseElem3"
                  defaultMessage="DEVELOPPEMENT"
                />
              </p>
            </li>
            <li className={Style.expertiseElem}>
              <img src={icon7} alt="icon" className="img-thumbnail border-0" />
              <p className={Style.textExpertise}>
                <FormattedMessage
                  id="app.home.expertiseElem4"
                  defaultMessage="WEB DESIGN"
                />
              </p>
            </li>
          </ul>
          <div className="text-center">
            <button href="#" className="btn btn-primary">
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
