const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  ownerFirstName: String,
  ownerLastName: String,
  contactNumber: String,
  alternateContact: String,
  locality: String,
  address: String,
  spaceType: String,
  petsAllowed: Boolean,
  preference: String,
  bachelorsGender: String,
  furnishingType: String,
  bhk: Number,
  floor: String,
  nearestLandmark: String,
  washroomType: String,
  cooling: String,
  carParking: Boolean,
  rent: Number,
  maintenance: Number,
  squareFeet: Number,
  appliances: [String],
  amenities: [String],
  about: String,
  photos: [String],
  createdAt: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Property', propertySchema);
