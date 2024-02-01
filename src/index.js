import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import Landing from "pages/prod/Landing.js";
import Conductor from "pages/prod/Conductor.js";
import Contacts from "pages/prod/Contacts.js";
import Unready from "pages/prod/Unready.js";
import DevIndex from "pages/dev/DevIndex.js";
import DevLanding from "pages/dev/DevLanding.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Landing />} />
      <Route path="/maestro" exact element={<Conductor />} />
      <Route path="/orgaos" exact element={<Unready />} />
      <Route path="/escola" exact element={<Unready />} />
      <Route path="/agenda" exact element={<Unready />} />
      <Route path="/contactos" exact element={<Contacts />} />

      <Route path="/dev/index" exact element={<DevIndex />} />
      <Route path="/dev/landing" exact element={<DevLanding />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
