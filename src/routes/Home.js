import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/browse">Browse</Link>
        </li>
      </ul>
    </div>
  );
}
