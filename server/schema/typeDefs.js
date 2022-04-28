const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    id: ID
    email: String
    review: String
}

type Location {
    id: ID
    name: String
}
`;

module.exports = typeDefs;