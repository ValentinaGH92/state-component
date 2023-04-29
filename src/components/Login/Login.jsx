import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import CustomAlert from "../Alert/Alert";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activateAlert, setActivateAlert] = useState(false);
  const [activeSuccesAlert, setActiveSuccesAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const correctUserName = "Tinita";
    const correctPassword = "Camila";

    if (username === correctUserName && password === correctPassword) {
      setActiveSuccesAlert(true);
    } else {
      setActivateAlert(true);
    }

    await setTimeout(() => {
      setActivateAlert(false);
      setActiveSuccesAlert(false);
    }, 3000);
  };

  return (
    <>
      {activateAlert && (
        <CustomAlert
          title="Error"
          description="Los datos son incorrectos"
          variant="danger"
        />
      )}
      {activeSuccesAlert && (
        <CustomAlert
          title="Correcto"
          description="Te haz logeado!!"
          variant="success"
        />
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
