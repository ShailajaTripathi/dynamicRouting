import React from 'react';
import {NavLink} from 'react-router-dom';
import '../index.css';

function Navigation() {
  return (
    <div className="nav-bar">
       
          <NavLink exact activeClassName="active" to='/posts'>
            Posts
          </NavLink>
          <NavLink exact activeClassName="active" to='/comments'>
            Comments
          </NavLink>
          <NavLink exact activeClassName="active" to='/albums' activeStyle>
            Album
          </NavLink>
          <NavLink exact activeClassName="active" to='/photos' activeStyle>
            photos
          </NavLink>
          <NavLink exact activeClassName="active" to='/todos' activeStyle>
            todos
          </NavLink>
          <NavLink exact activeClassName="active" to='/users' activeStyle>
           users
          </NavLink>
     
    </div>
  )
}

export default Navigation