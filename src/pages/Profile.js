import React from 'react';
import UserInfo from '../components/Profile/UserInfo.js';
import TeamAffiliations from '../components/Profile/TeamAffiliations.js';
import SportsStatistics from '../components/Profile/SportsStatistics.js';
import Preferences from '../components/Profile/Preferences.js';

const Profile = () => {
  return (
    <div className="profile">
      <UserInfo />
      <TeamAffiliations />
      <SportsStatistics />
      <Preferences />
    </div>
  );
}

export default Profile;
