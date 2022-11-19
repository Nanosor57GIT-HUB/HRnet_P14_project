import React from "react";
import { Link } from "react-router-dom";

/**
 * @name Header
 * @description create header component with a logo and link of navigation
 * @returns {JSX.Element}
 *
 */

const Header = () => {
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
        <Link to="/employeesList" className="toggleModal nav-link">
          Employee List
        </Link>
      </div>
    </div>
  );
};

export default Header;
