// client/src/components/Events/EventDetails.js
import React from 'react';
import './Events.css';

const EventDetails = ({ event }) => {
  // Format date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="event-details-container">
      <div className="event-image-large">
        <img 
          src={event.image.startsWith('/uploads') 
            ? `http://localhost:5000${event.image}` 
            : '/default-event.jpg'} 
          alt={event.title} 
        />
      </div>
      
      <div className="event-info">
        <div className="event-info-item">
          <span className="label">Event Type:</span>
          <span className="value">{event.eventType}</span>
        </div>
        
        <div className="event-info-item">
          <span className="label">Date:</span>
          <span className="value">{formatDate(event.date)}</span>
        </div>
        
        <div className="event-info-item">
          <span className="label">Time:</span>
          <span className="value">{event.time}</span>
        </div>
        
        <div className="event-info-item">
          <span className="label">Location:</span>
          <span className="value">{event.location}</span>
        </div>
        
        <div className="event-info-item">
          <span className="label">Organizer:</span>
          <span className="value">{event.organizer}</span>
        </div>
        
        <div className="event-info-item">
          <span className="label">Contact:</span>
          <span className="value">{event.contact}</span>
        </div>
      </div>
    )