import React, {useState} from "react";
import Router from 'next/router'
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";

function Login() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!formValidate()){
      return false;
    }
    if (values.email == "admin@gmail.com" && values.password == "abc123") {
      Router.push('/admin/dashboard')
      localStorage.setItem('_isLogin','true')
    }
  }
  const handleChange = (event) => {
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setErrors(errors => ({ ...errors, [event.target.name]: "" }));
    if (!event.target.value) {
      setErrors(errors => ({ ...errors, [event.target.name]: "Above field is required." }));
    }
  };
  const formValidate = () => {
    let isValid = true;
    setErrors({ email: "", password: "" });
    const fieldList = ["email", "password"];
    for (let x of fieldList) {
      if (!values[x]) {
        isValid = false;
        setErrors(errors => ({ ...errors, [x]: "Above field is required." }));
      }
    }
    return isValid;
  };
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-4">
            <div className="text-center text-muted mb-4">
              <div>
                <img src={require("assets/img/logo/logo.png")} class="logo_login" alt="logo" />
              </div>
              <small>Sign in with credentials</small>
            </div>
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={handleChange}
                    name="email"
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
                {errors.email ? <small className="text-danger">{errors.email}</small> : null}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={handleChange}
                    name="password"
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
                {errors.password ? <small className="text-danger">{errors.password}</small> : null}
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

Login.layout = Auth;

export default Login;
