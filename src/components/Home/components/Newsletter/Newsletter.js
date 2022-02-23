import { connect } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { addNewsletter } from "../../../../store/actions";
import { FormattedMessage } from "react-intl";

import React, { Component } from "react";
import caretUp from "../../../../assets/images/caret-up.svg";
import Style from "./Newsletter.module.scss";
class Newsletter extends Component {
  constructor(props) {
    super(props);
  }
  userSchema = Yup.object().shape({
    email: Yup.string().email().required(),
  });
  submitEmail = (values, actions) => {
    this.props.addNewsletter(values);
    actions.setSubmitting(false);
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
                <FormattedMessage
                  id="app.newsletter.title"
                  defaultMessage="S'INSCRIRE À NOTRE"
                />
              </p>
              <p className={Style.titreNewsletter + " mb-6"}>
                <FormattedMessage
                  id="app.newsletter.titleSecondary"
                  defaultMessage="NEWSLETTER"
                />
              </p>
              <Formik
                onSubmit={this.submitEmail}
                initialValues={{ email: "" }}
                validationSchema={this.userSchema}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  isSubmitting,
                  errors,
                  touched,
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    className={Style.form + " rounded-pill"}
                  >
                    <input
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="email"
                      placeholder="ENTRER VOTRE EMAIL"
                      className={
                        errors.email && touched.email
                          ? Style.inputNewsletter +
                            " form-control rounded-pill shadow-0 w-100 border-danger"
                          : Style.inputNewsletter +
                            " form-control rounded-pill shadow-0 w-100 border-success"
                      }
                    />
                    <button
                      type="submit"
                      className=" btn btn-sm rounded-pill"
                      disabled={isSubmitting}
                    >
                      OK
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(null, { addNewsletter })(Newsletter);
