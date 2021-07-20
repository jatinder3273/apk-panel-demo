import React from "react";

// reactstrap components
import { Spinner } from "reactstrap";

// core components

export default function PageChange(props) {
  return (
    <div>
      <div className="page-transition-wrapper-div">
        <div className="page-transition-icon-wrapper mb-3">
          <Spinner
            color="white"
            style={{ width: "3rem", height: "3rem", borderWidth: ".2rem" }}
          />
        </div>
      </div>
    </div>
  );
}
