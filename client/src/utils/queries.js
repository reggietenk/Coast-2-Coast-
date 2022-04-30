import { gql } from '@apollo/client';

export const QUERY_REVIEWS = gql`
  query reviews($username: String) {
    reviews(username: $username) {
      _id
      reviewBody
      createdAt
      username
			location {
        _id
				lat
				lon
      }
    }
  }
`;

export const QUERY_REVIEW = gql`
  query review($id: ID!) {
    review(_id: $id) {
      _id
      reviewBody
      createdAt
      username
      location {
        _id
				lat
				lon
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      review {
        _id
        reviewBody
        createdAt
        username
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      review {
        _id
        reviewBody
        createdAt
				username
        location {
          _id
          lat
          lon
        }
      }
    }
  }
`;