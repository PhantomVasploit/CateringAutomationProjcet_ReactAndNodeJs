import {Formik, Form} from "formik";
import {useContext} from "react";
import * as Yup from "yup";
import InputField from "../InputField";
import { UserAuthContext } from "../../contexts/UserAuthContext";


const CashierLogin = ()=>{
  const {cashierLoginSubmit} = useContext(UserAuthContext);
  const validate = Yup.object({
    password: Yup.string()
    .min(8, "Password should at least be 8 characters long")
    .required("Password field is required"),
    employeeNumber:Yup.string()
    .required("Employee Number is required"),
  })
  return(
    <Formik
    initialValues = {{
      password: "",
      employeeNumber: ""
    }}
    validationSchema = {validate}
    onSubmit = { cashierLoginSubmit }
    >
      {
        formik=>(
          <div className="container m-4">
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center">
              <Form>
                <fieldset className="form-group">
                  <h1 className="d-flex justify-content-center"><img src={require("../logo.png")} alt="" width="60" height="60" className="d-inline-block align-text-top me-3"  /> Egerton Bites </h1>
                  <legend className="border-bottom mb-4 text-center mt-4">Cashier's Sign In</legend>
                  <InputField label="Employee Number" name="employeeNumber" type="text" />
                  <InputField label="Password" name="password" type="password" />
                </fieldset>
                  <div className="d-flex justify-content-center mt-4">
                    <input className="btn btn-outline-success" type="submit" value="Login"/>
                  </div>
              </Form>
            </div>
            </div>
          </div>
        )
      }
    </Formik>
  );
}
export default CashierLogin;
