import React from "react";
import { Col, UncontrolledTooltip } from "reactstrap";

const ImageUpload = ({ colSize, lableText, handleOnChange, image, error, nameProp, fileLoading, infoIconText }) => {
  return (
    <>
      <Col md={colSize}>
        <h4>
          {lableText}{" "}
          {infoIconText ? (
            <>
              <a href="#pablo" id={`${nameProp}-toolTip`} onClick={e => e.preventDefault()}>
                <i className="fa fa-info-circle" />
              </a>
              <UncontrolledTooltip delay={0} target={`${nameProp}-toolTip`}>
                {infoIconText}
              </UncontrolledTooltip>
            </>
          ) : (
            ""
          )}
        </h4>
        <div className="blog_image">
          <div className="avatar-upload">
            <div className="avatar-edit">
              <input
                type="file"
                id={nameProp}
                accept=".png, .jpg, .jpeg, .gif"
                name={nameProp}
                onChange={e => handleOnChange(e, nameProp)}
              />
              <label htmlFor={nameProp}>
                <i className="fas fa-edit" />
              </label>
            </div>
            <div className="avatar-preview">
              {fileLoading ? <p className="spinner" /> : <div id="imagePreview" style={{ backgroundImage: `url(${image})` }} />}
            </div>
          </div>
        </div>
        {error ? <small className="text-danger">{error}</small> : ""}
      </Col>
    </>
  );
};

export default ImageUpload;
