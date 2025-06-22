import React from "react";
import ReactDOM from "react-dom/client";
import SidebarApp from "../pages/SidebarApp";
import "../styles/tailwind.css";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <SidebarApp />
    </React.StrictMode>
  );
}
