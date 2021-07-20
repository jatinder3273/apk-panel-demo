import React, { useState } from "react";
import { Button, Card, CardHeader, CardBody, Container, Row, FormGroup, Form, Input, Col } from "reactstrap";
import Header from "components/Headers/Header.js";
import ImageUpload from "components/ImageUpload/ImageUpload.js";
import Admin from "layouts/Admin.js";
import Link from "next/link";

const Edit = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isPlaystore, setIsPlaystore] = useState(0);
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
    setErrors({
      appName: "",
      appVersion: "",
      appTagline: "",
      developerName: "",
      appCategory: "",
      appPackageId: "",
      metaTitleTag: "",
      metaImage: "",
      languageCode: "",
      appDescription: "",
      metaDescription: "",
      appIcon: "",
      appFile: "",
      screenShots: "",
      type: ""
    });
    const fieldList = [
      "appName",
      "appVersion",
      "appTagline",
      "developerName",
      "appCategory",
      "appPackageId",
      "metaTitleTag",
      "metaImage",
      "languageCode",
      "appDescription",
      "metaDescription",
      "appIcon",
      "appFile",
      "screenShots",
      "type"
    ];
    if(isPlaystore){
      fieldList.push('appUrl')
    }
    for (let x of fieldList) {
      if (!values[x]) {
        isValid = false;
        setErrors(errors => ({ ...errors, [x]: "Above field is required." }));
      }
    }
    return isValid;
  };

  const handleOnChangePayStore = (event) => {
    if(event.target.checked){
      setIsPlaystore(1)
    }else{
      setIsPlaystore(0)
    }
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setErrors(errors => ({ ...errors, [event.target.name]: "" }));
    if (!event.target.value) {
      setErrors(errors => ({ ...errors, [event.target.name]: "Above field is required." }));
    }
  }
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
                    <h3 className="mb-0">Edit App or Game</h3>
                  </div>
                  <div className="col text-right">
                    <Link href="/admin/apps-games">
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
                    <Col lg="12">
                      <div className=" custom-control custom-checkbox mb-3">
                        <input
                          onChange={handleOnChangePayStore}
                          name="isPlaystore"
                          className=" custom-control-input"
                          id="customCheck1"
                          type="checkbox"
                        />
                        <label className=" custom-control-label" htmlFor="customCheck1">
                          <span>Edit app from Play Store</span>
                        </label>
                      </div>
                    </Col>
                    {isPlaystore ? (
                      <Col lg="12">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="app-url">
                            App URL
                          </label>
                          <Input
                            onChange={handleOnChange}
                            name="appUrl"
                            className="form-control-alternative"
                            id="app-url"
                            placeholder="App URL"
                            type="text"
                          />
                          {errors.appUrl ? <small className="text-danger">{errors.appUrl}</small> : null}
                        </FormGroup>
                      </Col>
                    ) : null}

                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="app-name">
                          App Name
                        </label>
                        <Input
                          onChange={handleOnChange}
                          name="appName"
                          className="form-control-alternative"
                          id="app-name"
                          placeholder="App Name"
                          type="text"
                        />
                        {errors.appName ? <small className="text-danger">{errors.appName}</small> : null}
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="app-version">
                          App Version
                        </label>
                        <Input
                          onChange={handleOnChange}
                          name="appVersion"
                          className="form-control-alternative"
                          id="app-version"
                          placeholder="App Version"
                          type="text"
                        />
                        {errors.appVersion ? <small className="text-danger">{errors.appVersion}</small> : null}
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="app-tagline">
                          App Tagline
                        </label>
                        <Input
                          onChange={handleOnChange}
                          name="appTagline"
                          className="form-control-alternative"
                          id="app-tagline"
                          placeholder="App Tagline"
                          type="text"
                        />
                        {errors.appTagline ? <small className="text-danger">{errors.appTagline}</small> : null}
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="meta-title-tag">
                          Meta Title Tag
                        </label>
                        <Input
                          onChange={handleOnChange}
                          name="metaTitleTag"
                          className="form-control-alternative"
                          id="meta-title-tag"
                          placeholder="Meta Title Tag"
                          type="text"
                        />
                        {errors.metaTitleTag ? <small className="text-danger">{errors.metaTitleTag}</small> : null}
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="developer-name">
                          Developer name
                        </label>
                        <Input
                          onChange={handleOnChange}
                          name="developerName"
                          className="form-control-alternative"
                          id="developer-name"
                          placeholder="Developer name"
                          type="text"
                        />
                        {errors.developerName ? <small className="text-danger">{errors.developerName}</small> : null}
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="app-package-id">
                          App package ID
                        </label>
                        <Input
                          onChange={handleOnChange}
                          name="appPackageId"
                          className="form-control-alternative"
                          id="app-package-id"
                          placeholder="App package ID"
                          type="text"
                        />
                        {errors.appPackageId ? <small className="text-danger">{errors.appPackageId}</small> : null}
                      </FormGroup>
                    </Col>
                    <Col lg="4">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="type">
                          Type
                        </label>
                        <Input
                          onChange={handleOnChange}
                          id="type"
                          type="select"
                          name="type"
                          className="form-control-alternative"
                        >
                          <option value="">Select Type</option>
                          <option value="1">Apps</option>
                          <option value="2">Games</option>
                        </Input>
                        {errors.type ? <small className="text-danger">{errors.type}</small> : null}
                      </FormGroup>
                    </Col>
                    <Col lg="4">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="app-category">
                          App Category
                        </label>
                        <Input
                          onChange={handleOnChange}
                          id="app-category"
                          type="select"
                          name="appCategory"
                          className="form-control-alternative"
                        >
                          <option value="">Select Category</option>
                          <option value="1">Action</option>
                          <option value="2">Advanture</option>
                        </Input>
                        {errors.appCategory ? <small className="text-danger">{errors.appCategory}</small> : null}
                      </FormGroup>
                    </Col>
                    <Col lg="4">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="app-category">
                          Language Code
                        </label>
                        <Input
                          onChange={handleOnChange}
                          id="app-category"
                          type="select"
                          name="languageCode"
                          className="form-control-alternative"
                        >
                          <option value="">Select Language Code</option>
                          <option value="en">English</option>
                          <option value="hi">Hindi</option>
                        </Input>
                        {errors.languageCode ? <small className="text-danger">{errors.languageCode}</small> : null}
                      </FormGroup>
                    </Col>
                    <Col lg="12">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="app-description">
                          App Description
                        </label>
                        <Input
                          onChange={handleOnChange}
                          name="appDescription"
                          className="form-control-alternative"
                          id="app-description"
                          placeholder="App Description"
                          type="textarea"
                        />
                        {errors.appDescription ? <small className="text-danger">{errors.appDescription}</small> : null}
                      </FormGroup>
                    </Col>
                    <Col lg="12">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="meta-description">
                          Meta Description
                        </label>
                        <Input
                          onChange={handleOnChange}
                          name="metaDescription"
                          className="form-control-alternative"
                          id="meta-description"
                          placeholder="Meta Description"
                          type="textarea"
                        />
                        {errors.metaDescription ? <small className="text-danger">{errors.metaDescription}</small> : null}
                      </FormGroup>
                    </Col>
                    <ImageUpload
                      colSize={4}
                      lableText="App Icon"
                      handleOnChange={handleOnChange}
                      image={require("assets/img/logo/logo-icon.png")}
                      error={errors.appIcon ? errors.appIcon : ""}
                      nameProp="appIcon"
                      fileLoading={false}
                      infoIconText="Image size message"
                    />
                    <ImageUpload
                      colSize={4}
                      lableText="APK File"
                      handleOnChange={handleOnChange}
                      image={require("assets/img/logo/logo-icon.png")}
                      error={errors.appFile ? errors.appFile : ""}
                      nameProp="appFile"
                      fileLoading={false}
                      infoIconText="Only APK and OBB files allowed"
                    />
                    <ImageUpload
                      colSize={4}
                      lableText="Meta Image"
                      handleOnChange={handleOnChange}
                      image={require("assets/img/logo/logo-icon.png")}
                      error={errors.metaImage ? errors.metaImage : ""}
                      nameProp="metaImage"
                      fileLoading={false}
                      infoIconText="Image size message"
                    />
                    <Col lg="12" className="mt-4">
                      <FormGroup>
                        <div className="custom-file">
                          <input
                            onChange={handleOnChange}
                            name="screenShots"
                            className="custom-file-input"
                            id="customFileLang"
                            lang="en"
                            type="file"
                            multiple
                          />
                          <label className="custom-file-label" htmlFor="customFileLang">
                            Select Screenshots
                          </label>
                        </div>
                        {errors.screenShots ? <small className="text-danger">{errors.screenShots}</small> : null}
                      </FormGroup>
                    </Col>
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

Edit.layout = Admin;

export default Edit;
