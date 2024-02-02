import React from 'react';
import MyTeams from '../components/Teams/MyTeams.js';
import CreateTeamForm from '../components/Teams/CreateTeamForm.js';
import TeamDetails from '../components/Teams/TeamDetails.js';

const Teams = () => {
  return (
    <div className="teams">
      <MyTeams />
      <CreateTeamForm />
      <TeamDetails />
    </div>
  );
}

export default Teams;
