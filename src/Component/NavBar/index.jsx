import { Link, NavLink } from 'react-router-dom'
const NavBar = ({ HandleLogout, isAuthenticated}) => {
    return (
        <nav className='main-nav'>
            <div className='container'>
                <Link to='/' className='logo'>React Router Tutorial</Link>
                <ul className='nav-links'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/user/123'>User Profile</NavLink>
                    <NavLink to='/search'>Search</NavLink>
                    {isAuthenticated ? (
                        <>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink 
                        onClick={() => {
                            HandleLogout()
                        }}
                        style={{ background: 'red' }}
                        >
                            Logout
                            </NavLink>
                            </>
                            ) : (
                                <>
                                <NavLink to='/login'>Login</NavLink>
                                <NavLink to='/signup'>Sign Up</NavLink>

                                </>
                            )}
                            </ul>
                            </div>
                            </nav>
                            )
                        }
                        export default NavBar