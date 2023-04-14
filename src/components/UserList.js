import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUsers } from "../services/users";
import { Button, Row, Col, Card } from "react-bootstrap";
import UserForm from "./UserForm";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.usersSlice.users);

  useEffect(() => {
    GetUsers(dispatch);
  }, []);

  return (
    <Row>
      {users.map(e => (
        <ListCol user={e} />
      ))}
    </Row>
  );
};

const ListCol = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Col md={6} xs={12}>
      <Card
        style={{
          width: "18rem",
          marginBottom: "10px",
        }}
      >
        <Card.Body>
          <Card.Title tag="h5">
            <b>Name : </b>
            {user.name}
          </Card.Title>

          <Card.Text>
            <b>Job : </b> : {user.job || user.pantone_value}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UserList;
