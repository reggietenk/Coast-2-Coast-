import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
				email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
				email
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($reviewBody: String!) {
    addReview(reviewBody: $reviewBody) {
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

// export const ADD_LOCATION = gql`
//   mutation addLocation(reviewId: ID!, lat: Int!, lon: Int!) {
//     addLocation(reviewId: $reviewId, lat: $lat, lon: $lon) {
// 			_id
// 			reviewBody
// 			username
// 			createdAt
// 			location {
// 				_id
// 				lat
// 				lon
// 			}
// 		}
//   }
// `;