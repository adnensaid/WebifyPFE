import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Style from "./Footer.module.scss";
export default class Footer extends Component {
  render() {
    const ListItemLink = ({ to, name, index, ...rest }) => (
      <Route
        path={to}
        children={() => (
          <li className={Style.navItem}>
            <NavLink
              to={to}
              {...rest}
              activeClassName="active"
              className={Style.navLink}
            >
              <FormattedMessage
                id={"app.header.navlink" + index}
                defaultMessage={name}
              />
            </NavLink>
          </li>
        )}
      />
    );
    return (
      <footer className={Style.footer + " py-3"}>
        <div
          className={
            this.props.location.pathname === "/home"
              ? "container-fluid"
              : "container"
          }
        >
          <div className={Style.footerContent}>
            <ul className={Style.nav}>
              <ListItemLink to="/home" name="ACCUEIL" index="0"></ListItemLink>
              <ListItemLink
                to="/service"
                name="SERVICES"
                index="1"
              ></ListItemLink>

              <ListItemLink
                to="/portfolio"
                name="PORTFOLIO"
                index="2"
              ></ListItemLink>
              <ListItemLink
                to="/testimonial"
                name="temoignages"
                index="3"
              ></ListItemLink>
              <ListItemLink
                to="/contact"
                name="contact"
                index="4"
              ></ListItemLink>
            </ul>
            <p>
              ©
              <FormattedMessage
                id="copyright"
                defaultMessage="TOUS DROIT RÉSERVÉS"
              />
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
