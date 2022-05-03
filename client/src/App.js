import * as React from 'react'
import Map from './components/Map';
import 'mapbox-gl/dist/mapbox-gl.css';
import AppNavbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Nav } from 'react-bootstrap';
// import 'mapbox-gl/dist/mapbox-gl.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// import { setContext } from "@apollo/client/link/context";
import './index.css' 

// import Home from './pages/HomePage'
// import SignupForm from './components/SignupForm'



const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
});
  },
  uri: '/graphql'
});




function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
        {/* <AppNavbar /> */}
        <div className="container">
        <Route exact path='/' component={Map} />
        </div>
        </Router>
        
    </ApolloProvider>
  );
}
export default App