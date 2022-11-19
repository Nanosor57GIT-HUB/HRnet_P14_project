import { configureStore } from "@reduxjs/toolkit";
import newEmployeeReducer from "../features/employeeSlice";

export const store = configureStore({
  reducer: {
    newEmployee: newEmployeeReducer,
  },
});
