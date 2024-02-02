import React from 'react';
import ProfileSettings from '../components/Settings/ProfileSettings.js';
import NotificationSettings from '../components/Settings/NotificationSettings.js';
import SecuritySettings from '../components/Settings/SecuritySettings.js';

const Settings = () => {
  return (
    <div className="settings">
      <ProfileSettings />
      <NotificationSettings />
      <SecuritySettings />
    </div>
  );
}

export default Settings;
