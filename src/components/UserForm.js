import { React, useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { EditUser, NewUser, DeleteUser } from "../services/users";
import { useDispatch } from "react-redux";

const UserForm = ({ User, setIsEditing }) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [isNewUser, setIsNewUser] = useState(true);
  const dispatch = useDispatch();

  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        if (isNewUser) {
          NewUser(dispatch, {
            name: name,
            job: job,
          });
        }
      }}
    >
      <Row>
        <Col>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={"Name"}
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </Col>
        <Col>
          <Form.Label>Job</Form.Label>
          <Form.Control
            type="text"
            placeholder={"Job"}
            value={job}
            onChange={event => setJob(event.target.value)}
          />
        </Col>
        <div style={{ marginTop: "auto" }}>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </div>
      </Row>
    </Form>
  );
};

export default UserForm;
