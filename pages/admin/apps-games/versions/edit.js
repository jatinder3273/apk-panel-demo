import React, { useState } from "react";
import { Button, Row, FormGroup, Form, Input, Col, Modal, ModalBody } from "reactstrap";
import ImageUpload from "components/ImageUpload/ImageUpload.js";

const Edit = ({ open, handleEditVersion }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const handleSubmitVersion = event => {
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
    setErrors({ versionFile: "" });
    const fieldList = ["versionFile"];
    for (let x of fieldList) {
      if (!values[x]) {
        isValid = false;
        setErrors(errors => ({ ...errors, [x]: "Above field is required." }));
      }
    }
    return isValid;
  };
  return (
    <Modal toggle={handleEditVersion} isOpen={open}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Edit Version
        </h5>
        <button aria-label="Close" className="close" type="button" onClick={handleEditVersion}>
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <ModalBody>
        <Form role="form" onSubmit={handleSubmitVersion}>
          <Row>
            <Col lg="12">
              <FormGroup>
                <label className="form-control-label" htmlFor="version-name">
                  Version Number
                </label>
                <Input
                  className="form-control-alternative"
                  id="version-name"
                  placeholder="Version Number"
                  type="text"
                  name="versionNumber"
                  value="5.0.0"
                  disabled={true}
                />
                {errors.versionNumber ? <small className="text-danger">{errors.versionNumber}</small> : null}
              </FormGroup>
            </Col>
            <ImageUpload
              colSize={12}
              lableText="Version File"
              handleOnChange={handleOnChange}
              image={require("assets/img/logo/logo-icon.png")}
              error={errors.versionFile ? errors.versionFile : ""}
              nameProp="versionFile"
              fileLoading={false}
              infoIconText="File info message"
            />
          </Row>
          <div className="text-right mt-4">
            <Button color="secondary" type="button" onClick={handleEditVersion}>
              Cancel
            </Button>
            <Button color="primary" type="submit" size="md">
              Update
            </Button>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default Edit;
