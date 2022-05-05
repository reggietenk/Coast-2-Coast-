import React from 'react';
import Auth from '../utils/auth';
import Map from '../components/Map';





const Home = () => {
    
  const loggedIn = Auth.loggedIn();
  
    return (
      <main>
            <div class="home-container">
                <p>Coast2Coast 🌎 </p>
            </div>
          {loggedIn && (
           <Map />
            
          )}
       
      </main>
    );
  };
  
  export default Home;