import React from "react";
const Test = () => (
  <section className="page">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5 col-xs-12 d-flex flex-column justify-content-center ">
          <div className="banner-text">
            <h1 className="title text-uppercase">
              Création de sites web et application mobiles sur mesure
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectutur adipiscing elit, sed do
              eiusmod tempor Ut enim ad Lorem ipsum dolor sit amet,
            </p>
            <button className="btn btn-primary">Découvrez-nous !</button>
          </div>
        </div>
        <div className="col-7 d-flex justify-content-end align-items-start p-0 col-xs-0">
          <div className="banner-img ratio ratio-1x1"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Test;
