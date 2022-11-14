import React from 'react';
import FormSignUp from './Formulaire';

/**
 * @name Modal
 * @description creation of a modal intended to host the form
 * @returns {JSX.Element}
 *
 */

//Modal form
const Modal = (props) => {
  //Management open/close
  const toggle = props.toggle;
  const action = props.action;

  return (
    <div className={`container-modal ${toggle ? "active" : ""}`}>
      <div className="modal">
        <FormSignUp />
        <img
          src="../images/closeCross.svg"
          className="closeModal"
          alt="close-modal"
          onClick={action}
        />
      </div>
    </div>
  );
};

export default Modal;
