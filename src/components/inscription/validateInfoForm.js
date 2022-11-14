export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "firstName required";
  }
  
   if (!values.lastName.trim()) {
    errors.lastName = "lastName required";
  }
 
  if (!values.dateOfBirth) {
    errors.dateOfBirth = "dateOfBirth required";
  }

  if (!values.startDate) {
    errors.startDate = "startDate required";
  }

  if (!values.street) {
    errors.street = "street is required";
   } 


   if (!values.city) {
     errors.city = "city is required";
   } 

    if (!values.state) {
      errors.state = "state is required";
    } 

     if (!values.zipCode) {
       errors.zipCode = "zipCode is required";
     } 

      if (!values.department) {
        errors.department = "department is required";
      } 
  return errors;
}
