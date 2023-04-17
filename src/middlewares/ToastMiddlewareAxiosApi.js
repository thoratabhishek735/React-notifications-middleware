import { toast } from "react-toastify";

const USER_MESSAGES = {
  SUCCESS_GET: "Users fetched succesfully.",
  ERROR_GET: "Error getting Users.",
  SUCCESS_POST: "User created successfully.",
  ERROR_POST: "Error creating new User.",
};

const getMessageByResponse = (response, type) => {
  console.log(response.config.method.toUpperCase());
  if (type === "SUCCESS") {
    if (response.message) {
      return response.message;
    } else {
      return USER_MESSAGES[`${type}_${response.config.method.toUpperCase()}`];
    }
  } else {
    if (response.message) {
      return response.error;
    } else {
      return USER_MESSAGES[`${type}_${response.config.method.toUpperCase()}`];
    }
  }
};

export const showNotification = response => {
  const config = response.config;
  if (response.status === 201 || response.status === 200) {
    toast.success(getMessageByResponse(response, "SUCCESS"), {
      toastId: "id1",
    });
  } else {
    toast.error(getMessageByResponse(response, "ERROR"), { toastId: "id1" });
  }
};
