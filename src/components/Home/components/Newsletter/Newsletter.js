import { connect } from "react-redux";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";
import { addNewsletter } from "../../../../store/actions";
import React, { Component } from "react";
import caretUp from "../../../../assets/images/caret-up.svg";

import Style from "./Newsletter.module.scss";

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  submitEmail = () => {
    this.props.addNewsletter({
      email: this.input.current.value,
    });
    this.input.current.value = "";
  };

  render() {
    return (
      <section className="pt-5">
        <div className={Style.newsletter}>
          <div className="container-xs">
            <div className="text-center">
              <button className={Style.toggleBtn}>
                <img src={caretUp} alt="img" className={Style.toggleIcon} />
              </button>
            </div>
            <div className={Style.newsletterContent + " pb-6 pt-3"}>
              <p className={Style.titleSecondary + " mb-1"}>
                S'INSCRIRE À NOTRE
              </p>
              <p className={Style.titreNewsletter + " mb-6"}>NEWSLETTER</p>
              <form action="#" className={Style.form + " rounded-pill"}>
                <input
                  type="email"
                  ref={this.input}
                  placeholder="ENTREZ VOTRE MAIL"
                  className={
                    Style.inputNewsletter +
                    " form-control rounded-pill border-0 shadow-0 w-100 border-success"
                  }
                />
                <button
                  onClick={this.submitEmail}
                  type="submit"
                  className=" btn btn-sm rounded-pill"
                >
                  OK
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(null, { addNewsletter })(Newsletter);
