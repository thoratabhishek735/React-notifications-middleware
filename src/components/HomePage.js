import UserList from "./UserList";
import UserForm from "./UserForm";
import { ToastContainer } from "react-toastify";

const HomePage = () => (
  <div style={{ width: "60%", margin: "auto" }}>
    <ToastContainer />
    <h4>New User</h4>
    <UserForm />
    <hr style={{ border: "1px solid grey" }} />
    <h4>Your Users</h4>
    <UserList />
  </div>
);

export default HomePage;
