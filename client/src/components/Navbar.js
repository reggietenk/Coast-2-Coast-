import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../src/utils/auth';

const logout = event => {
  event.preventDefault();
  Auth.logout();
};

const Header = () => {

	function refreshPage() {
    window.location.reload(false);
  }

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>COAST2COAST</h1>
        </Link>

				<nav className="text-center">
					{Auth.loggedIn() ? (
						<>
							<a href="/" onClick={logout}>
								Logout
							</a>
						</>
					) : (
						<>
							<div>
								<button onClick={refreshPage}>
									<Link to="/login">Login</Link>
								</button>
								<button onClick={refreshPage}>
									<Link to="/signup">Signup</Link>
								</button>
							</div>

						</>
					)}
				</nav>
      </div>
    </header>
  );
};

export default Header;
