import React from "react";
import { createRoot } from "react-dom/client";
import App from './components/App.jsx'
import  "./components/assets/base.css";

const root = createRoot(document.getElementById("root"));

root.render(<App />);