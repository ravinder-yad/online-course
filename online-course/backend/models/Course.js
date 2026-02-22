const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  instructorRole: {
    type: String,
    required: true
  },
  instructorImg: {
    type: String
  },
  rating: {
    type: Number,
    default: 0
  },
  reviews: {
    type: String
  },
  students: {
    type: String
  },
  lastUpdated: {
    type: String
  },
  language: {
    type: String,
    default: 'English'
  },
  duration: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  originalPrice: {
    type: Number
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  willLearn: [{
    type: String
  }],
  curriculum: [{
    title: String,
    lessons: String
  }],
  enrolledStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
