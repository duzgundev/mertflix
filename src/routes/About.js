import React from 'react';

import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
