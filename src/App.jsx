import React from "react";
import { RouterProvider } from "react-router";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Payroll from "./pages/Payroll";
import TimeAbsence from "./pages/TimeAbsence";
import RouteLayout from "./Router/RouteLayout";
import Login from "./pages/Login";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Home />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="payroll" element={<Payroll />} />
        <Route path="time-absence" element={<TimeAbsence />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
