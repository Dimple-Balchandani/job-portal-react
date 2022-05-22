import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import JobDetails from "./pages/job-details";
import JobsListing from "./pages/jobs-listing";
import CreateJob from "./pages/employer/create-job";
import Profile from "./pages/employee/profile";
import EditProfile from "./pages/employee/edit-profile";

const BaseRouter = () => {

  return (
      <div>
          <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/jobs" element={<JobsListing />} />
              <Route exact path="/job/:id" element={<JobDetails />} />
              <Route path="/login" element={<Login />} />
              <Route exact path="/create-job" element={<CreateJob />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/employee/:id" element={<Profile />} />
              <Route exact path="/edit-profile" element={<EditProfile />} />
          </Routes>
      </div>
  );
};

export default BaseRouter;