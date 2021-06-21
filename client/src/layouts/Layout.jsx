import { Link } from 'react-router-dom';

export default function Layout(props) {
	const { currentUser, handleLogout, children } = props;
	return (
		<div>
			<header>
				<h1>Tasteville</h1>
				{currentUser ? (
					<>
						<p>{currentUser.username}</p>
						<button onClick={handleLogout}>Logout</button>
					</>
				) : (
					<Link to='/login'>Login/Register</Link>
				)}
				<hr />
        {
          currentUser && 
          <>
            <Link to='/foods'>Foods</Link>
            <Link to='/flavors'>Flavors</Link>
          </>
        }
			</header>
			{children}
		</div>
	);
}
