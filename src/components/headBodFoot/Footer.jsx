import React from "react";

/**
 * @name Footer
 * @description create footer component with copyright
 * @returns {JSX.Element}
 *
 */

const Footer = () => {
  return (
    <div className="container-footer">
      <p className="copyright">
        <span className="hrNetFooter">HRnet</span>2022@Copyright
      </p>
    </div>
  );
};

export default Footer;
