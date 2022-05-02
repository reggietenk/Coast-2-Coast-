import * as React from 'react'
import Map from './components/Map';
import 'mapbox-gl/dist/mapbox-gl.css';
// import AppNavbar from './components/Navbar';
// import { Nav } from 'react-bootstrap';
// import 'mapbox-gl/dist/mapbox-gl.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import './index.css' 

// import Home from './pages/HomePage'
// import SignupForm from './components/SignupForm'



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
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="">

        <Map/>
        {/* <AppNavbar /> */}
        <div className="container">
          {/* <AppNavbar /> */}
        </div>
        {/* <Footer /> */}
      </div>
    </ApolloProvider>
  );
}
export default App