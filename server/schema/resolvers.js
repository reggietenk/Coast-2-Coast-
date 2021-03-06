const { User, Review } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
				me: async (parent, args, context) => {
					if (context.user) {
						const userData = await User.findOne({ _id: context.user._id })
							.select('-__v -password')
							.populate('review');
				
						return userData;
					}
				
					throw new AuthenticationError('Not logged in');
				},

				users: async () => {
					return User.find()
						.select('-__v -password')
						.populate('review');
				},

				user: async (parent, { username }) => {
					return User.findOne({ username })
						.select('-__v -password')
						.populate('review');
				},

				reviews: async () => {
					return Review.find().select('-__v').populate('location');
				},

				review: async (parent, { _id }) => {
					return Review.findOne({ _id }).select('-__v').populate('location');;
				}
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect login information!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect login information!');
            }

            const token = signToken(user);
            return { token, user };
        },

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        addReview: async (parent, args, context) => {
            if (context.user) {
							const review = await Review.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { review: review._id } },
                    { new: true }
                );

                return review;
            }

            throw new AuthenticationError('There was a request error...');
        },

				addLocation: async (parent, { reviewId, lat, lon }, context) => {
					if (context.user) {
						const updatedReview = await Review.findOneAndUpdate(
							{ _id: reviewId },
							{ $push: { location: { lat, lon, username: context.user.username } } },
							{ new: true, runValidators: true }
						);
				
						return updatedReview;
					}
				
					throw new AuthenticationError('You need to be logged in!');
				},

        removeReview: async (parent, args, context) => {
            if (context.user) {
							const review = await Review.deleteOne({ ...args, username: context.user.username });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { review: review._id } },
                );

                return review;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;