// client/src/components/Events/EventList.js
import React, { useEffect, useContext, useState } from 'react';
import { EventContext } from '../../context/EventContext';
import EventItem from './EventItem';
import SearchBar from '../UI/SearchBar';
import Loader from '../UI/Loader';
import './Events.css';

const EventList = () => {
  const { events, loading, getEvents } = useContext(EventContext);
  const [eventType, setEventType] = useState('');

  useEffect(() => {
    getEvents();
    // eslint-disable-next-line
  }, []);

  const handleSearch = (searchTerm) => {
    getEvents(searchTerm, eventType);
  };

  const handleFilterChange = (e) => {
    const selected = e.target.value;
    setEventType(selected);
    getEvents('', selected);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="events-container">
      <h1>College Events</h1>
      
      <div className="filters">
        <SearchBar onSearch={handleSearch} />
        
        <div className="event-type-filter">
          <select value={eventType} onChange={handleFilterChange}>
            <option value="">All Event Types</option>
            <option value="academic">Academic</option>
            <option value="cultural">Cultural</option>
            <option value="sports">Sports</option>
            <option value="workshop">Workshop</option>
            <option value="seminar">Seminar</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      {events.length === 0 ? (
        <p className="no-events">No events found</p>
      ) : (
        <div className="event-grid">
          {events.map((event) => (
            <EventItem key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;