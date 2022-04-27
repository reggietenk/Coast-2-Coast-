const { AuthenticationError } = require('apollo-server-express');
const { User, State } = require('../models');
const { signToken } = require('../utils/auth');