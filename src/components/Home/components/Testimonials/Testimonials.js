import React, { Component } from "react";
import Style from "./testimonials.module.scss";
import quoteFade from "../../../../assets/images/quotefade.png";
import { connect } from "react-redux";

const Testimonials = ({ testimonials, state }) => {
  console.log(state);
  return (
    <section className=" py-5">
      <div className="container-small">
        <p className="title-section mb-6">AVIS DE NOS CLIENTS</p>
        <div className={Style.testimonials}>
          {testimonials.map((t, i) => (
            <div key={i} className={Style.card + " card border-0 shadow-lg"}>
              <div className={Style.cardBody + " card-body"}>
                <p className={Style.cardText + " paragraph-xs"}>{t.comment}</p>
                <img src={t.img} alt={t.name} className={Style.authorImg} />
                <div className={Style.skill}>
                  <p className={Style.authorName}>{t.name}</p>
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
