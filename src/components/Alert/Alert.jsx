import React from "react";
import { Alert } from "react-bootstrap";

const CustomAlert = ({ variant, title, description }) => {
  return (
    <Alert variant={variant}>
      <Alert.Heading>{title}</Alert.Heading>
      <p>{description}</p>
    </Alert>
  );
};

export default CustomAlert;
