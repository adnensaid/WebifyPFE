import { connect } from "react-redux";
import React from "react";
import { FormattedMessage } from "react-intl";
import Style from "./filter.module.scss";
import { VisibilityFilters, setFilter } from "../../../../../store/actions";
const Filter = ({ setFilter }) => {
  return (
    <ul
      className={Style.navCategories + " nav nav-pills nav-fill  mb-4"}
      id="pills-tab nav-categories"
      role="tablist"
    >
      <li className={Style.navItem + " nav-item"} role="presentation">
        <button
          className={Style.navLink + " nav-link btn btn-secondary active"}
          onClick={() => setFilter(VisibilityFilters.SHOW_ALL)}
          id="pills-contact-tab"
          style={{ borderRadius: 0 }}
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          <FormattedMessage
            id={"app.home.portfolio.navlink0"}
            defaultMessage=""
          />
        </button>
      </li>
      <li className={Style.navItem + " nav-item"} role="presentation">
        <button
          className={Style.navLink + " nav-link btn btn-secondary "}
          onClick={() => setFilter(VisibilityFilters.SHOW_GRAPHIQUE)}
          id="pills-contact-tab"
          style={{ borderRadius: 0 }}
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          <FormattedMessage
            id={"app.home.portfolio.navlink1"}
            defaultMessage=""
          />
        </button>
      </li>
      <li className={Style.navItem + " nav-item"} role="presentation">
        <button
          className={Style.navLink + " nav-link btn btn-secondary "}
          onClick={() => setFilter(VisibilityFilters.SHOW_LOGOS)}
          id="pills-contact-tab"
          style={{ borderRadius: 0 }}
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          <FormattedMessage
            id={"app.home.portfolio.navlink2"}
            defaultMessage=""
          />
        </button>
      </li>
      <li className={Style.navItem + " nav-item"} role="presentation">
        <button
          className={Style.navLink + " nav-link btn btn-secondary "}
          onClick={() => setFilter(VisibilityFilters.SHOW_DESIGN)}
          id="pills-contact-tab"
          style={{ borderRadius: 0 }}
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          <FormattedMessage
            id={"app.home.portfolio.navlink3"}
            defaultMessage=""
          />
        </button>
      </li>
      <li className={Style.navItem + " nav-item"} role="presentation">
        <button
          className={Style.navLink + " nav-link btn btn-secondary "}
          onClick={() => setFilter(VisibilityFilters.SHOW_APPMOBILE)}
          id="pills-contact-tab"
          style={{ borderRadius: 0 }}
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          <FormattedMessage
            id={"app.home.portfolio.navlink4"}
            defaultMessage=""
          />
        </button>
      </li>
    </ul>
  );
};

export default connect(null, (dispatch) => {
  return {
    setFilter: (filter) => {
      dispatch(setFilter(filter));
    },
  };
})(Filter);

/* export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        "TOUS",
        "DESIGN WEB",
        "LOGOS",
        "GRAPHIQUE",
        "APPLICATIONS MOBILES",
      ],
    };
  }
  render() {
    return (
      <ul
        className={Style.navCategories + " nav nav-pills nav-fill  mb-4"}
        id="pills-tab nav-categories"
        role="tablist"
      >
        {this.state.menu.map((m, i) => (
          <li
            className={Style.navItem + " nav-item"}
            role="presentation"
            key={i}
          >
            <button
              className={
                i === 0
                  ? Style.navLink + ` nav-link active btn btn-secondary`
                  : Style.navLink + ` nav-link btn btn-secondary`
              }
              id="pills-contact-tab"
              style={{ borderRadius: 0 }}
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              <FormattedMessage
                id={"app.home.portfolio.navlink" + i}
                defaultMessage={m}
              />
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
 */
