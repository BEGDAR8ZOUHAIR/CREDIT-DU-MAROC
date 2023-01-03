const asyncHandler = require("express-async-handler");
const Client = require("../models/clientModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");



// @desc    Get a single client
// @route   GET /admin/singleClient/:id
// @access  Private
const singleClient = asyncHandler(async (req, res) =>
{
  const client = await Client.findById(req.params.id)
  res.send(client);
});

// @desc    Get all clients
// @route   GET /admin/clients
// @access  Private

const getClients = asyncHandler(async (req, res) =>
{
  const clients = await Client.find();
  res.send(clients);
});

// @desc    Get total clients
// @route   GET /admin/totalClients
// @access  Private

const totalClients = asyncHandler(async (req, res) =>
{
  const total = await Client.countDocuments();
  res.status(200).json(total);
});

module.exports = {
  createClient,
  singleClient,
  getClients,
  totalClients,
  updateClient,
  deleteClient,
  authClient,

};
