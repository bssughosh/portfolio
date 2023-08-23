import React from "react";
import { memo } from "react";
import { Spinner } from "react-bootstrap";

const CircularProgressIndicator = () => {
  return (
    <div className="centered">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default memo(CircularProgressIndicator);
