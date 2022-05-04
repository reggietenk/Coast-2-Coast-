import * as React from 'react'
// import Map from './components/Map';
import 'mapbox-gl/dist/mapbox-gl.css';
import AppNavbar from './components/Navbar';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/HomePage';
import NoMatch from './pages/NoMatch';



const httpLink = createHttpLink({
  uri: '/graphql',
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
				<div className="flex-column justify-flex-start min-100-vh">
      		<AppNavbar />
					<div className="container">
						<Routes>
							<Route exact path="/" component={Home} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/signup" component={Signup} />
							<Route component={NoMatch} />
						</Routes>
					</div>
        	{/* <div className="map-container">

      	</div> */}
				</div>
      </Router>
    </ApolloProvider>
  );
}
export default App