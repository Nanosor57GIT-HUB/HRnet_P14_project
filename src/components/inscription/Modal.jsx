import React from 'react';
import FormSignUp from './Formulaire';

const Modal = (props) => {

const toggle = props.toggle

const action = props.action

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
