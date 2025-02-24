const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    username: String,
    year: Number,
    model: String,
    brand: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    imageUrl: { type: String },
    comments: [{ 
        content: String, 
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        createdAt: { type: Date, default: Date.now }
    }]
}, { timestamps: true });
    


module.exports = mongoose.model('cars', carSchema)
