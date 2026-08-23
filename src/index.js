import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";

import { QueryClient, QueryClientProvider } from "react-query";
export const queryClient = new QueryClient();

axios.defaults.baseURL = "http://localhost:3030/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
