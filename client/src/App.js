import * as React from 'react'
import Map from './components/Map';
import 'mapbox-gl/dist/mapbox-gl.css';
import AppNavbar from './components/Navbar';
// import { Nav } from 'react-bootstrap';
// import 'mapbox-gl/dist/mapbox-gl.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import './index.css' 
// import { Switch ,Route, Router } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';

// import Home from './pages/HomePage'
// import Signup from './components/Signup'
// import Login from './pages/Login';
import Signup from './pages/Signup';
// import NoMatch from './pages/NoMatch';



const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <>
          <AppNavbar />

        <Route>
              <Route exact path="/" component={Map} />
              <Route exact path="/login" component={Login} /> 
							<Route exact path="/signup" component={Signup} />
							{/* <Route component={NoMatch} />   */}
              
            </Route>
      </>
      </Router>
    </ApolloProvider>
  );
}
export default App