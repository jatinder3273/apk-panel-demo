import React, { useState } from "react";
import { Button, Card, CardHeader, CardBody, Container, Row, FormGroup, Form, Input, Col } from "reactstrap";
import Header from "components/Headers/Header.js";
import ImageUpload from "components/ImageUpload/ImageUpload.js";
import Admin from "layouts/Admin.js";
import Link from "next/link";

const Add = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const handleSubmitCategory = event => {
    event.preventDefault();
    if (!formValidate()) {
      return false;
    }
  };
  const handleOnChange = event => {
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setErrors(errors => ({ ...errors, [event.target.name]: "" }));
    if (!event.target.value) {
      setErrors(errors => ({ ...errors, [event.target.name]: "Above field is required." }));
    }
  };
  const formValidate = () => {
    let isValid = true;
    setErrors({ categoryName: "", categoryType: "", categoryIcon: "" });
    const fieldList = ["categoryName", "categoryType", "categoryIcon"];
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
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Add Category</h3>
                  </div>
                  <div className="col text-right">
                    <Link href="/admin/categories">
                      <Button color="primary" size="sm">
                        <i className="ni ni-bold-left" /> Back
                      </Button>
                    </Link>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <Form role="form" onSubmit={handleSubmitCategory}>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="category-name">
                          Category Name
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="category-name"
                          placeholder="Category Name"
                          type="text"
                          name="categoryName"
                          onChange={handleOnChange}
                        />
                        {errors.categoryName ? <small className="text-danger">{errors.categoryName}</small> : null}
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="category-type">
                          Category Type
                        </label>
                        <Input
                          onChange={handleOnChange}
                          id="category-type"
                          type="select"
                          className="form-control-alternative"
                          name="categoryType"
                        >
                          <option value="">Select Type</option>
                          <option value="1">Apps</option>
                          <option value="2">Games</option>
                        </Input>
                        {errors.categoryType ? <small className="text-danger">{errors.categoryType}</small> : null}
                      </FormGroup>
                    </Col>
                    <ImageUpload
                      colSize={12}
                      lableText="Icon"
                      handleOnChange={handleOnChange}
                      image={require("assets/img/logo/logo-icon.png")}
                      error={errors.categoryIcon ? errors.categoryIcon : ""}
                      nameProp="categoryIcon"
                      fileLoading={false}
                      infoIconText="Image size message"
                    />
                  </Row>
                  <div className="text-left">
                    <Button className="my-2 mt-4" color="primary" type="submit" size="md">
                      Save
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

Add.layout = Admin;

export default Add;
