import { newUser, setUsersError, newUserError } from "../app/userSlice";
import { toast } from "react-toastify";

const ToastMiddleware = () => next => action => {
  switch (action.type) {
    case newUser.type:
      toast.success("New User added successfully");
      break;

    case setUsersError.type:
      toast.error("Error loading Users");
      break;
    case newUserError.type:
      toast.error("Error adding new User");
      break;
    default:
      break;
  }
  return next(action);
};

export default ToastMiddleware;
