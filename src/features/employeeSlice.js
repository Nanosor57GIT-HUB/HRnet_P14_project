import { createSlice } from "@reduxjs/toolkit";
import dataUser from "../components/employee/DataUser";

//start array employee array with mock data
const initialState = {
  arrayEmployee: [...dataUser],
};

export const newEmployeeSlice = createSlice({
  name: "newEmployee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.arrayEmployee.push(action.payload);
    },
  },
});

export const { addEmployee } = newEmployeeSlice.actions;

export default newEmployeeSlice.reducer;
