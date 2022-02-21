import React from "react";
import { FormattedMessage } from "react-intl";
import Style from "./Filter.module.scss";
//import "bootstrap/dist/js/bootstrap.bundle.js";

const ButtonCategories = (props) => {
  // get unique category items
  const uniqueItems = (x, i, array) => array.indexOf(x) === i;
  const projectCategories = props.projects
    .map((proj) => proj.category)
    .filter(uniqueItems);
  projectCategories.unshift("TOUS");
  //projectCategories.sort();
  return (
    <ul
      className={Style.navCategories + " nav nav-pills nav-fill mb-2"}
      id="pills-tab nav-categories"
      role="tablist"
    >
      {projectCategories.map((category, i) => (
        <li
          key={category}
          className={Style.navItem + " nav-item"}
          role="presentation"
        >
          <button
            className={
              i === 0
                ? Style.navLink + ` nav-link active btn btn-secondary`
                : Style.navLink + ` nav-link btn btn-secondary`
            }
            onClick={() => props.setCategory(category)}
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
              defaultMessage={category}
            />
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ButtonCategories;
