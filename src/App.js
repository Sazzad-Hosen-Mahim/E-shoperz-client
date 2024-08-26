import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, ActivationPage } from "./Routes.js";
import "./App.css";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { server } from "./server.js";
// import Store from "./redux/store.js";
import { loadUser } from "./redux/actions/user.js";
// import { useDispatch } from "react-redux";
import Store from "./redux/store.js";

const App = () => {
  // const dispatch = useDispatch(); // Get dispatch function from useDispatch hook

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/sign-up" element={<SignupPage />}></Route>
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        ></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
