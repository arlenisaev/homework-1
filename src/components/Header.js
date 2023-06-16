import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <NavLink to="/">Posts</NavLink>
      <NavLink to="create">Create Posts</NavLink>
    </div>
  );
}

export default Header;
