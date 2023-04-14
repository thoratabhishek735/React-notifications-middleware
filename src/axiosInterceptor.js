import axios from "axios";
import { showNotification } from "./middlewares/ToastMiddlewareAxiosApi";

let store;

export const createInstanceandInjectStore = _store => {
  store = _store;

  const instance = axios.create({
    baseURL: `${window.location.protocol}//`,
  });

  instance.all = axios.all;
  instance.spread = axios.spread;

  axios.interceptors.response.use(
    response => {
      showNotification(response);
      return response;
    },
    async function (error) {
      showNotification(error);

      return Promise.reject(error);
    }
  );
  return instance;
};
