import React from 'react';
import { Link } from 'react-router-dom';
import UpcomingChallenges from '../components/Challenges/UpcomingChallenges.js';
import CreateChallengeForm from '../components/Challenges/CreateChallengeForm.js';
import MyChallenges from '../components/Challenges/MyChallenges.js';
import ChallengeDetails from '../components/Challenges/ChallengeDetails.js';

const Challenges = () => {
  return (
    <div className="challenges">
      <UpcomingChallenges />
      <CreateChallengeForm />
      <MyChallenges />
      <ChallengeDetails />
    </div>
  );
}

export default Challenges;
