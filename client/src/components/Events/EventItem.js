// client/src/components/Events/EventItem.js
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EventContext } from '../../context/EventContext';
import { AuthContext } from '../../context/AuthContext';
import Modal from '../UI/Modal';
import EventDetails from './EventDetails';
import './Events.css';

const EventItem = ({ event }) => {
  const { deleteEvent } = useContext(EventContext);
  const { user, isAuthenticated } = useContext(AuthContext);
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  // Format date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      await deleteEvent(event._id);
    }
  };

  // Determine if current user is the creator of the event
  const isOwner = isAuthenticated && user && event.user === user._id;

  return (
    <>
      <div className="event-card">
        <div className="event-image">
          <img 
            src={event.image.startsWith('/uploads') 
              ? `http://localhost:5000${event.image}` 
              : '/default-event.jpg'} 
            alt={event.title} 
          />
        </div>
        
        <div className="event-details">
          <h3>{event.title}</h3>
          <p className="event-type">{event.eventType}</p>
          <p className="event-date">{formatDate(event.date)} at {event.time}</p>
          <p className="event-location">{event.location}</p>
          
          <div className="event-actions">
            <button 
              className="btn btn-info"
              onClick={() => setShowDetails(true)}
            >
              View Details
            </button>
            
            {isOwner && (
              <>
                <Link to={`/edit-event/${event._id}`} className="btn btn-edit">
                  Edit
                </Link>
                <button className="btn btn-delete" onClick={handleDelete}>
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      
      <Modal 
        show={showDetails} 
        onClose={() => setShowDetails(false)}
        title={event.title}
      >
        <EventDetails event={event} />
      </Modal>
    </>
  );
};

export default EventItem;