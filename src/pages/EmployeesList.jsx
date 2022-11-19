import React from "react";
import DataTables from "../components/dataTables/DataTables";
import PropsExample from "../components/dataTables/PropsExample";
import DataUser from "../mocksData/DataUser";
import HeaderList from "../components/headBodFoot/HeaderList";
import Footer from "../components/headBodFoot/Footer";

/**
 * @name Modal
 * @description creation of a modal intended to host the datatables
 * @returns {JSX.Element}
 *
 */

//Modal datatables
const EmployeesList = () => {
  return (
    <div>
      <HeaderList />
      <DataTables label={PropsExample} data={DataUser} />
      <Footer />
    </div>
  );
};

export default EmployeesList;
