import { React, useEffect } from "react";
import HomePage from "./components/HomePage";
import store from "./app/store";
import { createInstanceandInjectStore } from "./axiosInterceptor";

const App = () => {
  createInstanceandInjectStore(store);
  return <HomePage />;
};

export default App;
