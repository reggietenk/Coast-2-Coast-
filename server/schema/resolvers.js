const { AuthenticationError } = require('apollo-server-express');
const { User, Review } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id });
                return userData;
            }
        },

        users: async () => {
            return await User.find().select('-__v -password').populate('review');
        },

        user: async (parent, { username }) => {
            return await User.findOne({ username }).select('-__v -password').populate('review');
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

        addReview: async (parent, { reviewBody }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { addReview: reviewBody } },
                    { new: true, runValidators: true }
                );

                return updatedUser;
            }

            throw new AuthenticationError('There was a request error...');
        },

        removeReview: async (parent, { reviewId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { addReview: { reviewId: reviewId } } },
                    { new: true }
                );

                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;