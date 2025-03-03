const mongoose = require('mongoose');


const commentSchema = mongoose.Schema({
  text: {
    type: String, 
    required: true
  },
  
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User"
  },
 
 
}, {
  timestamps: true
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;