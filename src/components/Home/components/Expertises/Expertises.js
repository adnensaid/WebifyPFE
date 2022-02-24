import React from "react";
import Style from "./Expertises.module.scss";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

const ExpertisesList = ({ expertises }) => {
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
          {expertises.map((e, i) => (
            <li className={Style.expertiseElem} key={i}>
              <img src={e.img} alt="icon" className="img-thumbnail border-0" />
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
};
export default connect((state) => {
  let expertises = state.expertises;
  return { expertises };
})(ExpertisesList);
