/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { addEmployee } from "../../features/employeeSlice";
import { statesList, departmentsList } from "../../mocksData/DataSelect";
import { useSelector, useDispatch } from "react-redux";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import validateInfo from "../../validateForm/validateInfoForm";
import moment from "moment/moment";
import Select from "react-select";
import { Modal } from "hrnet_component_plugin_modal";

/**
 * @name Form
 * @description creation of a form to generate information about the table
 * @returns {JSX.Element}
 */

const Form = () => {
  //custom react-select
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      borderColor: "#9e9e9e",
      minHeight: "30px",
      height: "25px",
      fontSize: 16,
      fontWeight: 400,
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "25px",
      padding: "0 6px",
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "0px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
      height: "20px",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "27px",
    }),
  };
  //get employee listed in the table
  const totalEmployee = useSelector((state) => state.newEmployee.arrayEmployee);
  console.log(totalEmployee);

  const dispatch = useDispatch();

  const initialValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  };

  //form values, error messages and if is submit or not
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  //modalConfirm
  const [modalState, setModalState] = useState(false);
  // select state management
  const [selectedState, setSelectedState] = useState();
  //dateOfBirth
  const [selectedBirth, setSelectedBirth] = useState(null);
  //startDate
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  // select department management
  const [selectedDpt, setSelectedDpt] = useState();

  function openModal() {
    setModalState(!modalState);
  }

  // Disable deprecated return to Date constructor
  const birthday = (data) => {
    setSelectedBirth(data);
    const dateValue = moment(data).format("DD/MM/YYYY");
    setFormValues({
      ...formValues,
      [(formValues.dateOfBirth = "dateOfBirth")]: (formValues.dateOfBirth =
        dateValue),
    });
    errors.dateOfBirth = "";
  };
  console.log(formValues);

  const startDate = (data) => {
    setSelectedStartDate(data);
    const dateValueStart = moment(data).format("DD/MM/YYYY");
    setFormValues({
      ...formValues,
      [(formValues.startDate = "startDate")]: (formValues.startDate =
        dateValueStart),
    });
    errors.startDate = "";
  };

  // Triggered on selection "state"
  function handleSelectState(data) {
    setSelectedState(data);
    setFormValues({ ...formValues, [data.name]: data.value });
    errors.state = "";
  }

  // Triggered on selection "department"
  function handleSelect(data) {
    setSelectedDpt(data);
    setFormValues({ ...formValues, [data.name]: data.value });
    errors.department = "";
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    //suppress the error message at the change of state of the input
    errors[e.target.name] = "";
  };

  //handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateInfo(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      openModal();

      //Add the form data to the Table
      formValues.id = totalEmployee.length + 1;
      console.log(formValues.id);
      //reset values
      setFormValues(initialValues);
      setSelectedState(null);
      setSelectedDpt(null);
      setSelectedBirth(null);
      setSelectedStartDate(null);
      dispatch(addEmployee(formValues));
    }
  }, [errors]);

  return (
    <div>
      <Modal toggle={modalState} action={openModal} />

      <div className="formFlex">
        <div className="container-form">
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="form"
            id="create-employee"
          >
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Your first name"
              value={formValues.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="errorForm">First name is required</p>
            )}

            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Your last name"
              value={formValues.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="errorForm">Last name is required</p>
            )}

            <label>Date of birth</label>
            <ReactDatePicker
              name="dateOfBirth"
              className="input"
              placeholderText="Select date"
              onChange={birthday}
              value={selectedBirth}
              selected={selectedBirth}
              maxDate={moment().add(4, "weeks")._d}
              showYearDropdown
              scrollableMonthYearDropdown
              dateFormat="dd/MM/yyyy"
            />
            {errors.dateOfBirth && (
              <p className="errorForm">Date of birth is required</p>
            )}

            <label htmlFor="startDate">Start Date</label>
            <ReactDatePicker
              name="startDate"
              onChange={startDate}
              value={selectedStartDate}
              selected={selectedStartDate}
              placeholderText="Select a date"
              maxDate={moment().add(4, "weeks")._d}
              showYearDropdown
              scrollableMonthYearDropdown
              dateFormat="dd/MM/yyyy"
            />
            {errors.startDate && (
              <p className="errorForm">Start date is required</p>
            )}

            <fieldset className="address">
              <legend>Address</legend>

              <label htmlFor="street">Street</label>
              <input
                id="street"
                name="street"
                type="text"
                placeholder="Your street"
                value={formValues.street}
                onChange={handleChange}
              />
              {errors.street && <p className="errorForm">Street is required</p>}

              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="Your city"
                value={formValues.city}
                onChange={handleChange}
              />
              {errors.city && <p className="errorForm">City is required</p>}

              <label htmlFor="state">State</label>
              <div style={{ width: "170px" }}>
                <Select
                  id="state"
                  name="state"
                  options={statesList}
                  placeholder="Select state"
                  value={selectedState}
                  onChange={handleSelectState}
                  styles={customStyles}
                />
              </div>
              {errors.state && <p className="errorForm">State is required</p>}

              <label htmlFor="zip-code">Zip Code</label>
              <input
                id="zipCode"
                name="zipCode"
                type="number"
                placeholder="Your zip code"
                value={formValues.zipCode}
                onChange={handleChange}
              />
              {errors.zipCode && (
                <p className="errorForm">Zip Code is required</p>
              )}
            </fieldset>

            <label htmlFor="department" className="labelForm">
              Department
            </label>

            <Select
              id="department"
              name="department"
              options={departmentsList}
              placeholder="Select department"
              value={selectedDpt}
              onChange={handleSelect}
              styles={customStyles}
            />
            {errors.department && (
              <p className="errorForm">Department is required</p>
            )}

            <div className="btn-save">
              <input type="submit" className="btn-submit" value="Save" />
            </div>
          </form>
        </div>
      </div>
      <Modal toggle={modalState} action={openModal} />
    </div>
  );
};

export default Form;
