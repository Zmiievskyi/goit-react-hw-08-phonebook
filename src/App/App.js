import React from "react";
// import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Contacts from "../Pages/Contacts";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route index element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* <Route path="*" element={<div>404</div>} /> */}
      </Routes>
    </>
  );
}

export default App;