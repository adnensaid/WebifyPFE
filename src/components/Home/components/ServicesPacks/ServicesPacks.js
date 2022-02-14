import React, { Component } from "react";
import Style from "./ServicesPacks.module.scss";
import service1 from "../../../../assets/images/vitrine.png";
import service2 from "../../../../assets/images/ecommerce.png";
import service3 from "../../../../assets/images/appmobile.png";
import service4 from "../../../../assets/images/surmesure.png";
import { FormattedMessage, FormattedDate } from "react-intl";

export default class ServicesPacks extends Component {
  render() {
    return (
      <section className={Style.services}>
        <div className="container">
          <p className="title-section">
            <FormattedMessage
              id="app.home.titleServices"
              defaultMessage="NOS SERVICES ET PACKS"
            />
          </p>
          <div className={Style.servicesList}>
            <div className={Style.servicesElem}>
              <img
                className={Style.imgService + " img-fluid"}
                src={service1}
                alt="service"
                data-aos="fade-left"
              />
              <div className={Style.servicesText}>
                <h2>
                  <FormattedMessage
                    id="app.home.serviceElemTitle0"
                    defaultMessage=""
                  ></FormattedMessage>
                </h2>
                <p className="paragraph">
                  <FormattedMessage
                    id="app.home.serviceElemText0"
                    defaultMessage="Lorem ipsum dolor sit, amet consectetur adipisicing elit.Illum, quae facere pariatur sunt voluptas dolor aliquid libero maxime? Aspernatur, eius officia. Ex sit minus saepe impedit fugit"
                  />
                </p>
                <button
                  href="#"
                  className={Style.linkServices + " btn btn-primary"}
                >
                  <FormattedMessage
                    id="app.home.seviceBtn"
                    defaultMessage="Je découvre"
                  />
                </button>
              </div>
            </div>
            <div className={Style.servicesElem}>
              <img
                className={Style.imgService + " img-fluid"}
                src={service2}
                alt="service"
                data-aos="fade-right"
              />
              <div className={Style.servicesText}>
                <h2>
                  <FormattedMessage
                    id="app.home.serviceElemTitle1"
                    defaultMessage="PACK E-COMMERCE"
                  />
                </h2>
                <p className="paragraph">
                  <FormattedMessage
                    id="app.home.serviceElemText1"
                    defaultMessage="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Illum, quae facere pariatur sunt voluptas dolor aliquid libero
                    maxime? Aspernatur, eius officia. Ex sit minus saepe impedit
                    fugit"
                  />
                </p>
                <button
                  href="#"
                  className={Style.linkServices + " btn btn-primary"}
                >
                  <FormattedMessage
                    id="app.home.seviceBtn"
                    defaultMessage="Je découvre"
                  />
                </button>
              </div>
            </div>
            <div className={Style.servicesElem}>
              <img
                className={Style.imgService + " img-fluid"}
                src={service3}
                alt="service"
                data-aos="fade-right"
              />
              <div className={Style.servicesText}>
                <h2>
                  <FormattedMessage
                    id="app.home.serviceElemTitle2"
                    defaultMessage="PACK APP. MOBILE"
                  />
                </h2>
                <p className="paragraph">
                  <FormattedMessage
                    id="app.home.serviceElemText2"
                    defaultMessage="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Illum, quae facere pariatur sunt voluptas dolor aliquid libero
                    maxime? Aspernatur, eius officia. Ex sit minus saepe impedit
                    fugit"
                  />
                </p>
                <button
                  href="#"
                  className={Style.linkServices + " btn btn-primary"}
                >
                  <FormattedMessage
                    id="app.home.seviceBtn"
                    defaultMessage="Je découvre"
                  />
                </button>
              </div>
            </div>
            <div className={Style.servicesElem}>
              <img
                className={Style.imgService + " img-fluid"}
                src={service4}
                alt="service"
                data-aos="fade-right"
              />
              <div className={Style.servicesText}>
                <h2>
                  <FormattedMessage
                    id="app.home.serviceElemTitle3"
                    defaultMessage="PACK SUR MESURE"
                  />
                </h2>
                <p className="paragraph">
                  <FormattedMessage
                    id="app.home.serviceElemText3"
                    defaultMessage="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Illum, quae facere pariatur sunt voluptas dolor aliquid libero
                    maxime? Aspernatur, eius officia. Ex sit minus saepe impedit
                    fugit"
                  />
                </p>
                <button
                  href="#"
                  className={Style.linkServices + " btn btn-primary"}
                >
                  <FormattedMessage
                    id="app.home.seviceBtn"
                    defaultMessage="Je découvre"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
