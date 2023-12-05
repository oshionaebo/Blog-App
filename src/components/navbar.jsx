import React, {useContext} from 'react'
import { NavLink, Link } from 'react-router-dom'
import LogOut from './loggedOut'
import { AuthContext } from '../context'

const NavBar = () => {
    const authContext = useContext(AuthContext)
    //console.log(authContext.isLogIn)
    const isLogIn = authContext.isLogIn
    console.log(isLogIn)

    const NavBars = [
        {
            name: 'Home', id: 1, path: '/',
        },
        {
            name: 'Post', id: 2, path: '/posts', 
        },
        {
            name: 'Albums', id: 3, path: '/albums', 
        },
        {
            name: 'Users', id: 4, path: '/users', 
        },
        {
            name: 'Login', id: 5, path: '/login', 
        },
        {
            name: 'Register', id: 6, path: '/register',
        },
        {
            name: 'logOut', id: 7, path: '/logout',
        },
    ]

    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        cursor: "pointer",
        backgroundColor: "black",
        color: "black",
        padding: "10px 0"
    }

    const navLinkStyle = {
        fontSize: "22px",
    }
    /*const displayNavItem = (navItem) => {
        const isLogIn = isLogIn
        if (navItem.isAuth === isLogIn) {
            return {
                <h3>{navItem.name}</h3> 
            }
        } else {
            return {
                <h3>{navItem.name}</h3>
            }
        }
       
    }*/

    return(
        <>
        <div style={navStyle}>       
            <NavLink style={navLinkStyle} to = '/'>
              Home
            </NavLink>
            <NavLink style={navLinkStyle} to = '/posts'>
              Posts
            </NavLink>
            <NavLink style={navLinkStyle} to = '/albums'>
              Albums
            </NavLink>
            <NavLink style={navLinkStyle} to = '/users'>
              Users
            </NavLink>
            {isLogIn === true && (
                 <NavLink style={navLinkStyle} to = '/logout'>
                 Log Out
               </NavLink>
            )}
            {isLogIn === false && (
                <NavLink style={navLinkStyle} to = '/login'>
                Login
              </NavLink>
            )} 
             {isLogIn === false && (
                <NavLink style={navLinkStyle} to = '/register'>
                Register
              </NavLink>
             )}
                    
        </div>
        </>
    )
}
export default NavBar;