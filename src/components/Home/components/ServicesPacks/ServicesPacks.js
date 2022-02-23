import React, { Component } from "react";
import Style from "./ServicesPacks.module.scss";
import service1 from "../../../../assets/images/vitrine.png";
import service2 from "../../../../assets/images/ecommerce.png";
import service3 from "../../../../assets/images/appmobile.png";
import service4 from "../../../../assets/images/surmesure.png";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

const ServicesPacks = ({ services }) => {
  return (
    <div className="container py-5">
      <p className="title-section mb-6">
        <FormattedMessage
          id="app.home.titleServices"
          defaultMessage="NOS SERVICES ET PACKS"
        />
      </p>
      <div className={Style.servicesList}>
        {services.map((s, i) => (
          <div className={Style.servicesElem} key={i}>
            <img
              className={Style.imgService + " img-fluid"}
              src={s.img}
              alt="service"
              data-aos="fade-left"
            />
            <div className={Style.servicesText + " pt-6"}>
              <h2 className="title-secondary mb-4">
                <FormattedMessage
                  id={"app.home.serviceElemTitle" + i}
                  defaultMessage={s.title}
                ></FormattedMessage>
              </h2>
              <p className="paragraph mb-4">
                <FormattedMessage
                  id={"app.home.serviceElemText" + i}
                  defaultMessage={s.text}
                />
              </p>
              <button href={s.link} className=" btn btn-lg">
                <FormattedMessage
                  id="app.home.seviceBtn"
                  defaultMessage="Je découvre"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default connect((state) => {
  let services = state.services;
  return { services };
})(ServicesPacks);

/* export default class ServicesPacks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          title: "PACK VITRINE",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Illum, quae facere pariatur sunt voluptas dolor aliquid libero maxime? Aspernatur, eius officia. Ex sit minus saepe impedit fugit",
          link: "#",
          img: service1,
        },
        {
          title: "PACK E-COMMERCE",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Illum, quae facere pariatur sunt voluptas dolor aliquid libero maxime? Aspernatur, eius officia. Ex sit minus saepe impedit fugit",
          link: "#",
          img: service2,
        },
        {
          title: "PACK APP. MOBILE",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Illum, quae facere pariatur sunt voluptas dolor aliquid libero maxime? Aspernatur, eius officia. Ex sit minus saepe impedit fugit",
          link: "#",
          img: service3,
        },
        {
          title: "PACK SUR MESURE",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Illum, quae facere pariatur sunt voluptas dolor aliquid libero maxime? Aspernatur, eius officia. Ex sit minus saepe impedit fugit",
          link: "#",
          img: service4,
        },
      ],
    };
  }
  render() {
    const length = this.state.services.length;
    return (
      <div className="container py-5">
        <p className="title-section mb-6">
          <FormattedMessage
            id="app.home.titleServices"
            defaultMessage="NOS SERVICES ET PACKS"
          />
        </p>
        <div className={Style.servicesList}>
          {this.state.services.map((s, i) => (
            <div
              className={
                i === length - 1
                  ? Style.servicesElem
                  : Style.servicesElem + " mb-6"
              }
              key={i}
            >
              <img
                className={Style.imgService + " img-fluid"}
                src={s.img}
                alt="service"
                data-aos="fade-left"
              />
              <div className={Style.servicesText + " pt-6"}>
                <h2 className="title-secondary mb-4">
                  <FormattedMessage
                    id={"app.home.serviceElemTitle" + i}
                    defaultMessage={s.title}
                  ></FormattedMessage>
                </h2>
                <p className="paragraph mb-4">
                  <FormattedMessage
                    id={"app.home.serviceElemText" + i}
                    defaultMessage={s.text}
                  />
                </p>
                <button href={s.link} className=" btn btn-lg">
                  <FormattedMessage
                    id="app.home.seviceBtn"
                    defaultMessage="Je découvre"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
} */
