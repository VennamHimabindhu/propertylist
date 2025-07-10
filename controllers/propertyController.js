const Property = require('../models/Property');

// ➕ Add Property
const createProperty = async (req, res) => {
  const property = new Property({ ...req.body, user: req.user });
  await property.save();
  res.status(201).json(property);
};

// 📄 Get All Properties (with Pagination & Sorting)
const getProperties = async (req, res) => {
  const { page = 1, limit = 6, sort = 'latest' } = req.query;

  let sortOption = {};
  if (sort === 'latest') sortOption.createdAt = -1;
  else if (sort === 'costLowToHigh') sortOption.rent = 1;
  else if (sort === 'costHighToLow') sortOption.rent = -1;
  else if (sort === 'popular') sortOption.views = -1;

  const properties = await Property.find()
    .sort(sortOption)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const count = await Property.countDocuments();

  res.json({ total: count, page: Number(page), properties });
};

// 🔍 Get Single Property & Increment Views
const getPropertyById = async (req, res) => {
  const property = await Property.findById(req.params.id);
  if (!property) return res.status(404).json({ message: 'Not found' });

  property.views += 1;
  await property.save();

  res.json(property);
};

module.exports = {
  createProperty,
  getProperties,
  getPropertyById
};
