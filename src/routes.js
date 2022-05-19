import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
// import JobDetailsPage from "./pages/JobDetailsPage";
// import JobsPage from "./pages/JobsPage";
// import LoginPage from "./pages/LoginPage";
// import EmployerPrivateRoute from "./commons/EmployerPrivateRoute";
// import PostJobPage from "./pages/employer/PostJobPage";
// import AppliedJobsPage from "./pages/employee/AppliedJobsPage";
// import EmployeePrivateRoute from "./commons/EmployeePrivateRoute";
// import EditProfilePage from "./pages/employee/EditProfilePage";
import EmployerHome from "./pages/employer-home";
// import ApplicantsPage from "./pages/employer/ApplicantsPage";
// import ApplicantsPerJobPage from "./pages/employer/ApplicantsPerJobPage";

const BaseRouter = () => {
  return (
      <div>
          <Routes>
              <Route exact path="/" element={<Login />} />
              {/* <Route exact path="/jobs" component={JobsPage} />
              <Route exact path="/jobs/:id" component={JobDetailsPage} /> */}
              <Route path="/login" element={<Login />} />
              {/* <EmployerPrivateRoute exact path="/post-job/" component={PostJobPage} /> */}
              <Route path="/employer" element={<EmployerHome />} />
              {/* <EmployerPrivateRoute exact path="/employer/applicants/" component={ApplicantsPage} />
              <EmployerPrivateRoute exact path="/employer/applicants/:job_id" component={ApplicantsPerJobPage} />
              <EmployeePrivateRoute exact path="/edit-profile/" component={EditProfilePage} />
              <EmployeePrivateRoute exact path="/applied-jobs/" component={AppliedJobsPage} /> */}
          </Routes>
      </div>
  );
};

export default BaseRouter;