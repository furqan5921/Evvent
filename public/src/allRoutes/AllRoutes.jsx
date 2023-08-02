import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Tasks from "../pages/task/Tasks";
import CompletedTask from "../pages/task/CompletedTask";
import PendingTasks from "../pages/task/PendingTasks";
import CreateTask from "../pages/task/CreateTask";
import PrivateComponent from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateComponent>
            <Tasks />
          </PrivateComponent>
        }
      />
      <Route
        path="/completed"
        element={
          <PrivateComponent>
            <CompletedTask />
          </PrivateComponent>
        }
      />
      <Route
        path="/pending"
        element={
          <PrivateComponent>
            <PendingTasks />
          </PrivateComponent>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/create"
        element={
          <PrivateComponent>
            <CreateTask />
          </PrivateComponent>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
