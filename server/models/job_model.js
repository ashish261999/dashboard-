const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String
    
  },
  salary: {
    type: String
  
  },
  location: {
    type: String
  
  },
  description: {
    type: String

  },
  image: {
    type: String
   
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
   
  },
  yoi :{
    type : Number
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
