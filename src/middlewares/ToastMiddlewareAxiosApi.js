import { toast } from "react-toastify";

export const showNotification = response => {
  if (response.status === 201 || response.status === 200) {
    toast.success("Success", { toastId: "id1" });
  } else {
    toast.error("Error", { toastId: "id1" });
  }
};
