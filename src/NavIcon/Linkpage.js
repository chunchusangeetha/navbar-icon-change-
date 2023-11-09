import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaCommentAlt } from 'react-icons/fa';

export default function Linkapage() {
  const location = useLocation();
  console.log(location.pathname, '13');
  const [displayicon, setDisplayicon] = useState(<FaHome />);
  useEffect(() => {
    if (location.pathname === '/') {
      setDisplayicon(<FaHome />);
    } else if (location.pathname === '/About') {
      setDisplayicon(<FaCommentAlt />);
    } else if (location.pathname === '/Contact') {
      setDisplayicon(<FaPhoneAlt />);
    } else {
      setDisplayicon(' ');
    }
  }, [location.pathname]);
  return (
    <div>
      <div>
        {displayicon}
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
}
