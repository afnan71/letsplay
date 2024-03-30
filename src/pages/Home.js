import React from 'react';
import '../components/Home/Home.css';
import { useNavigate } from 'react-router-dom';
import HomeContainer from '../components/HomeContainer/HomeContainer.js';

function Home() {
  const navigate = useNavigate();

  // Define click handler function for the "Get Started" button
  const handleGetStartedClick = () => {
    // Navigate to the login/signup page
    navigate('/loginSignup');
  };

  return (
    <div className="App">
      {/* Background image */}
      <div className="background-image">
      
      </div>
     
      {/* Content container */}
      <div className="content">
        {/* Heading */}
        <h1 className="heading">Let's Play</h1>
        
        {/* Slogan */}
        <p className="slogan">Play to get fit</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

        {/* Buttons */}
        <div className="buttons">
          <button className="button" onClick={handleGetStartedClick}>Get Started</button>
        </div>
      </div>
      <div className='homcont'>
        <HomeContainer title="Explore Teams" paragr="demo text Explore Teams" rute="teams"/>
        <HomeContainer title="Challenges" paragr="demo text Challenges" rute="challenges"/>
        <HomeContainer title="Facilities" paragr="demo text Facilities" rute="facilities"/>
      </div>
    </div>
  );
}

export default Home;
