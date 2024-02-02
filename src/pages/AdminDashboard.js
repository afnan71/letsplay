import React from 'react';
import UserManagement from '../components/AdminDashboard/UserManagement.js';
import TeamManagement from '../components/AdminDashboard/TeamManagement.js';
import ChallengeManagement from '../components/AdminDashboard/ChallengeManagement.js';
import FacilityManagement from '../components/AdminDashboard/FacilityManagement.js';
import ReportsAnalytics from '../components/AdminDashboard/ReportsAnalytics.js';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <UserManagement />
      <TeamManagement />
      <ChallengeManagement />
      <FacilityManagement />
      <ReportsAnalytics />
    </div>
  );
}

export default AdminDashboard;
