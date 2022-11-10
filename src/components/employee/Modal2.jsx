import React from 'react';
import DataTables from "./../../libDataTables/DataTables";
import PropsExample from "./PropsExample";
import DataUser from "./DataUser";

const Modal2 = (props) => {

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