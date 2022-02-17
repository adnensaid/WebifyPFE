import React, { Component, useContext } from "react";
import logo from "../../assets/images/logo.png";
import Style from "./Header.module.scss";
import { NavLink, Route } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";

export default class Header extends Component {
  static contextType = Context;

  render() {
    const ListItemLink = ({ to, name, index, ...rest }) => (
      <Route
        path={to}
        children={() => (
          <li className="nav-item">
            <NavLink
              to={to}
              {...rest}
              activeClassName="active"
              className={Style.navLink + " nav-link"}
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
    const { locale, selectLanguage } = this.context;
    return (
      <header className={Style.header + " fixed-top"}>
        <nav
          className={
            this.props.scrollTop === 0 &&
            this.props.location.pathname === "/home"
              ? Style.navbar + " navbar navbar-expand-lg header-transparent"
              : Style.navbar + " navbar navbar-expand-lg header-light"
          }
        >
          <div
            className={
              this.props.location.pathname === "/home"
                ? "container-fluid"
                : "container"
            }
          >
            <a className="navbar-brand" href="#">
              <img src={logo} className={Style.logo + " img-fluid"} alt="" />
            </a>
            <button
              className="navbar-toggler border"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className={Style.togglerIcon + " navbar-toggler-icon"}
              ></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className={Style.navbarMenu + " navbar-nav ms-auto"}>
                <ListItemLink
                  to="/home"
                  name="ACCUEIL"
                  index="0"
                ></ListItemLink>
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
                <li className="nav-item">
                  <select
                    className="form-select"
                    value={locale}
                    onChange={selectLanguage}
                    style={{
                      background: "transparent",
                      color: "white",
                      border: "none",
                      fontSize: "1rem",
                      lineHeight: "2.5em",
                      padding: "0 1rem",
                      fontFamily: "be_vietnamextrabold",
                      color: "var(--primary)",
                    }}
                  >
                    <option value="fr">FR</option>
                    <option value="en">EN</option>
                    <option value="ar">AR</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
