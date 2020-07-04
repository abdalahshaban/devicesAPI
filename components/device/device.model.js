const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({

    brand: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

}, { timestamps: true, usePushEach: true });

module.exports = mongoose.model('Device', deviceSchema);