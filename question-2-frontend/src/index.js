import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from "chart.js";
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
