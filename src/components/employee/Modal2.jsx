import React from 'react';
import DataTables from "./../../libDataTables/DataTables";
import PropsExample from "./PropsExample";
import DataUser from "./DataUser";

/**
 * @name Modal
 * @description creation of a modal intended to host the datatables
 * @returns {JSX.Element}
 *
 */

//Modal datatables
const Modal2 = (props) => {
//Management open/close
const toggle2 = props.toggle2
const action2 = props.action2

    return (
      <div className={`container-modal2 ${toggle2 ? "active" : ""}`}>
        <div className="modal2">
          <DataTables label={PropsExample} data={DataUser} />
          <img
            src="../images/closeCross.svg"
            className="closeModal"
            alt="close-modal"
            onClick={action2}
          />
        </div>
      </div>
    );
};

export default Modal2;
