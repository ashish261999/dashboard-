import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slidebar from "./component/sidebar";

import Home from "./pages/home";
import Chat from "./pages/chat";
import Activities from "./pages/activities";

import Job from "./pages/job";
import Interviews from "./pages/interview";
import NewHires from "./pages/new_hires";

import CompanyProfile from "./pages/company_profile";
import Community from "./pages/community";
import Team from "./pages/team";
import HrToolBox from "./pages/hr_tool_box";
import Reports from "./pages/reports";
import Setting from "./pages/setting";
import Header from "./component/header";

const App = () => {
  return (
    <div>
      <Router>
        <div class="main_page">
          <Slidebar />
          <div class="inner_page">
            <Header />
            <Routes>
              <Route exact path="/job" element={<Job />} />
              <Route path="/" element={<Job />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/activities" element={<Activities />} />

              <Route path="/interviews" element={<Interviews />} />
              <Route path="/new_hilres" element={<NewHires />} />
              <Route path="/company_profile" element={<CompanyProfile />} />
              <Route path="/community" element={<Community />} />
              <Route path="/team" element={<Team />} />
              <Route path="/hr_tool_box" element={<HrToolBox />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
