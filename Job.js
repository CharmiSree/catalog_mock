const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  postedDate: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Job', JobSchema);
