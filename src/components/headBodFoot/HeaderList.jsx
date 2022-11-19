import React from "react";
import { Link } from "react-router-dom";

/**
 * @name HeaderList
 * @description create header component with a logo and  link of navigation
 * @returns {JSX.Element}
 *
 */

const HeaderList = () => {
  return (
    <div className="header-container">
      <div className="societe">
        <div>
          <img
            className="logoHealthWealth"
            src="../images/logo.png"
            alt="logo"
          />
          <span className="hrNet"> HRnet</span>
        </div>
        <h1>Health-Wealth</h1>
      </div>
      <div className="header-nav">
        <Link to="/" className="toggleModal nav-link">
          Create Employee
        </Link>
      </div>
    </div>
  );
};

export default HeaderList;
