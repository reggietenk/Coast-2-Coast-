// import { useQuery } from '@apollo/client';
// import { QUERY_ME, QUERY_REVIEWS } from '../utils/queries';
// import SignupForm from '../components/SignupForm'
// import LoginForm from '../components/LoginForm'
// import Map from '../components/Map';
// import '../index.css'


// import Auth from '../utils/auth';



// const Home = () => {
    
  
//     return (
//      <div>
//          <h4 className='sidebar'>COAST2COAST</h4>
//      </div>
//     )
//   };

//   export default Home



import { Link } from 'react-router-dom';
// import Map from '../components/Map';


import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Map</h1>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
