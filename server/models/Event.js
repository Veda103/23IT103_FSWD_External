// server/models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
      maxlength: [1000, 'Description cannot be more than 1000 characters'],
    },
    eventType: {
      type: String,
      required: [true, 'Please specify event type'],
      enum: ['academic', 'cultural', 'sports', 'workshop', 'seminar', 'other'],
    },
    location: {
      type: String,
      required: [true, 'Please add event location'],
    },
    date: {
      type: Date,
      required: [true, 'Please add event date'],
    },
    time: {
      type: String,
      required: [true, 'Please add event time'],
    },
    image: {
      type: String,
      default: 'default-event.jpg',
    },
    organizer: {
      type: String,
      required: [true, 'Please add organizer information'],
    },
    contact: {
      type: String,
      required: [true, 'Please add contact information'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create index for searching
eventSchema.index({ title: 'text', description: 'text', eventType: 'text', location: 'text' });

module.exports = mongoose.model('Event', eventSchema);