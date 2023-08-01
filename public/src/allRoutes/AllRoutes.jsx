import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Tasks from "../pages/task/Tasks";
import CompletedTask from "../pages/task/CompletedTask";
import PendingTasks from "../pages/task/PendingTasks";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Tasks />} />
      <Route path="/completed" element={<CompletedTask />} />
      <Route path="/pending" element={<PendingTasks />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
