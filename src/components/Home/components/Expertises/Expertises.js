import React, { Component } from "react";
import icon3 from "../../../../assets/images/icon3.png";
import icon4 from "../../../../assets/images/icon4.png";
import icon5 from "../../../../assets/images/icon5.png";
import icon6 from "../../../../assets/images/icon6.png";
import icon7 from "../../../../assets/images/icon7.png";
import Style from "./Expertises.module.scss";
import { FormattedMessage } from "react-intl";

export default class Expertises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expertises: [
        { title: "RESPONSIVE DESIGN", img: icon3 },
        { title: "CONSEILS", img: icon4 },
        { title: "CMS", img: icon5 },
        { title: "DEVELOPPEMENT", img: icon6 },
        { title: "WEB DESIGN", img: icon7 },
      ],
    };
  }
  render() {
    return (
      <section className={Style.expertises}>
        <div className="container py-5">
          <p className="h1 title-section mb-5">
            <FormattedMessage
              id="app.home.titleExpertises"
              defaultMessage="NOS EXPERTISES"
            />
          </p>
          <ul className={Style.expertisesContent + " mb-5"}>
            {this.state.expertises.map((e, i) => (
              <li className={Style.expertiseElem} key={i}>
                <img
                  src={e.img}
                  alt="icon"
                  className="img-thumbnail border-0"
                />
                <p className={Style.textExpertise}>
                  <FormattedMessage
                    id={"app.home.expertiseElem" + i}
                    defaultMessage={e.title}
                  />
                </p>
              </li>
            ))}
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
