const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
	_id: ID
	email: String
	review: [Review]
}

type Review {
	_id: ID
	reviewBody: String
	username: String
	createdAt: String
	location: [Location]
}

type Location {
	_id: ID
	lat: Int
	lon: Int
}

type Query {
	me: User
	users: [User]
	user(username: String!): User
	reviews: [Review]
	review(_id: ID!): Review
}

type Mutation {
	login(email: String!, password: String!): Auth
	addUser(username: String!, email: String!, password: String!): Auth
	addReview(reviewBody: String!): Review
	addLocation(reviewId: ID!, lat: Int!, lon: Int!): Review
	removeReview(_id: ID!): Review
}

type Auth {
	token: ID!
	user: User
}
`;

module.exports = typeDefs;