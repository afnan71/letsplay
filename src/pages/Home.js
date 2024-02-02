import React from 'react';
import '../components/Home/Home.css';
function HomePage() {
  return (
    <div className="homepage">
      <h1>Lets Play</h1>
      <p>For the Love of the Game, Get in the Zone</p>
      <div className="buttons">
        <button onClick={() => alert('Team registration clicked!')}>
          Team Registration
        </button>
        <button onClick={() => alert('Facility locator clicked!')}>
          Facility Locator
        </button>
        <button onClick={() => alert('Challenges clicked!')}>
          Challenges
        </button>
      </div>
    </div>
  );
}

export default HomePage;
