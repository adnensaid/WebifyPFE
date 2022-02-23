import React from "react";
import { FormattedMessage } from "react-intl";

const Contact = () => {
  return (
    <div className="page">
      <div className="container">
        <h2 className="title-section text-start">
          <FormattedMessage id="app.titleContact" defaultMessage="" />
        </h2>
      </div>
    </div>
  );
};
export default Contact;
