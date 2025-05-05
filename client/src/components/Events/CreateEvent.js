// client/src/components/Events/CreateEvent.js
import React, { useState } from 'react';
import axios from 'axios';
import './Events.css'; // Assuming you have a CSS file for styling

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    name: '',
    type: '',
    date: '',
    time: '',
    location: '',
    organizer: '',
    contact: '',
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file input for image
  const handleFileChange = (e) => {
    setEventData((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('name', eventData.name);
    formData.append('type', eventData.type);
    formData.append('date', eventData.date);
    formData.append('time', eventData.time);
    formData.append('location', eventData.location);
    formData.append('organizer', eventData.organizer);
    formData.append('contact', eventData.contact);
    if (eventData.image) {
      formData.append('image', eventData.image);
    }

    try {
      const response = await axios.post('/api/events', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Event created successfully!');
      setEventData({
        name: '',
        type: '',
        date: '',
        time: '',
        location: '',
        organizer: '',
        contact: '',
        image: null,
      });
    } catch (err) {
      setError('Error creating event. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-event-container">
      <h2>Create Event</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="create-event-form">
        <div className="form-group">
          <label htmlFor="name">Event Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={eventData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="type">Event Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={eventData.type}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={eventData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={eventData.time}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={eventData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="organizer">Organizer:</label>
          <input
            type="text"
            id="organizer"
            name="organizer"
            value={eventData.organizer}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={eventData.contact}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Event Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Creating Event...' : 'Create Event'}
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
