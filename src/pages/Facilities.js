import React from 'react';
import DiscoverFacilities from '../components/Facilities/DiscoverFacilities.js';
import BookFacilityForm from '../components/Facilities/BookFacilityForm.js';
import MyBookings from '../components/Facilities/MyBookings.js';

const Facilities = () => {
  return (
    <div className="facilities">
      <DiscoverFacilities />
      <BookFacilityForm />
      <MyBookings />
    </div>
  );
}

export default Facilities;
