import React from 'react'
import './HomeContainer.css'
import { useNavigate } from 'react-router-dom';

const HomeContainer = (props) => {
    const navigate = useNavigate();
    const handleclick = () => {
        // Navigate to a different page
        navigate(`/${props.rute}`);
      };
  return (
    <>
      <div className='homecont_main'>
        <div className='homecont'>
          <h3>{props.title}</h3>
          <p>{props.paragr}</p>
          <button onClick={handleclick}>Learn More</button>
        </div>
      </div>
    </>
  );
}

export default HomeContainer;
