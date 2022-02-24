import React from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Style from "./testimonials.module.scss";
import quoteFade from "../../../../assets/images/quotefade.png";

const Testimonials = ({ testimonials, state }) => {
  return (
    <section className=" py-5">
      <div className="container-small">
        <p className="title-section mb-6">
          <FormattedMessage
            id="app.home.titleTestimonial"
            defaultMessage="AVIS DE NOS CLIENTS"
          />
        </p>
        <div className={Style.testimonials}>
          {testimonials.map((t, i) => (
            <div key={i} className={Style.card + " card border-0 shadow-lg"}>
              <div className={Style.cardBody + " card-body"}>
                <p className={Style.cardText + " paragraph-xs"}>
                  <FormattedMessage
                    id={"app.testimonials.comment" + i}
                    defaultMessage={t.comment}
                  />
                </p>
                <img src={t.img} alt={t.name} className={Style.authorImg} />
                <div className={Style.skill}>
                  <p className={Style.authorName}>
                    <FormattedMessage
                      id={"app.testimonials.author" + i}
                      defaultMessage={t.name}
                    />
                  </p>
                  {t.skill.map((s, i) => (
                    <img
                      key={i}
                      src={s}
                      alt="skill"
                      className={Style.imgSkill}
                    />
                  ))}
                </div>
                <div className={Style.quoteFade}>
                  <img src={quoteFade} alt="quote" className="quote-fade" />
                  <img src={quoteFade} alt="quote" className="quote-fade" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default connect((state) => {
  let testimonials = state.testimonials;
  return { testimonials, state };
})(Testimonials);
