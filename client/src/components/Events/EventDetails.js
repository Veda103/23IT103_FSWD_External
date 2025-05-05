// components/Events/EventDetails.js
import React, { useState } from 'react';
import EventDetails from './EventDetails';

const EventPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCloseEventDetails = () => {
    setSelectedEvent(null); // Close the event details by setting selectedEvent to null
  };

  const event = {
    title: 'Science Fair 2025',
    eventType: 'Science & Technology',
    date: '2025-09-25T10:00:00Z',
    time: '10:00 AM',
    location: 'Main Auditorium',
    organizer: 'Tech Club',
    contact: 'contact@techclub.com',
    image: '/uploads/science-fair.jpg',
  };

  return (
    <div>
      <button onClick={() => setSelectedEvent(event)}>View Event Details</button>

      {selectedEvent && (
        <EventDetails event={selectedEvent} onClose={handleCloseEventDetails} />
      )}
    </div>
  );
};

export default EventPage;
