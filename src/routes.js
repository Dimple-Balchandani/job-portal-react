import React, {useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
// import JobDetailsPage from "./pages/JobDetailsPage";
import JobsListing from "./pages/employer/jobs-listing";
import CreateJob from "./pages/employer/create-job";
// import {UserContext} from './contexts/userContext';

// import LoginPage from "./pages/LoginPage";
// import EmployerPrivateRoute from "./commons/EmployerPrivateRoute";
// import PostJobPage from "./pages/employer/PostJobPage";
// import AppliedJobsPage from "./pages/employee/AppliedJobsPage";
// import EmployeePrivateRoute from "./commons/EmployeePrivateRoute";
// import EditProfilePage from "./pages/employee/EditProfilePage";
// import EmployerHome from "./pages/employer/dashboard";
// import ApplicantsPage from "./pages/employer/ApplicantsPage";
// import ApplicantsPerJobPage from "./pages/employer/ApplicantsPerJobPage";

const BaseRouter = () => {

    // const userContext = useContext(UserContext);
    // const {isAuthenticated} = userContext.state;
    // let navigate = useNavigate();

  return (
      <div>
          <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/jobs" element={<JobsListing />} />
              {/* <Route exact path="/jobs/:id" component={JobDetailsPage} /> */}
              <Route path="/login" element={<Login />} />
              <Route exact path="/create-job" element={<CreateJob />} />
              {/* <Route path="/employer" element={<EmployerHome />} /> */}
              {/* <EmployerPrivateRoute exact path="/employer/applicants/" component={ApplicantsPage} />
              <EmployerPrivateRoute exact path="/employer/applicants/:job_id" component={ApplicantsPerJobPage} />
              <EmployeePrivateRoute exact path="/edit-profile/" component={EditProfilePage} />
              <EmployeePrivateRoute exact path="/applied-jobs/" component={AppliedJobsPage} /> */}
          </Routes>
      </div>
  );
};

export default BaseRouter;