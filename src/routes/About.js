import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="font-body">
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
      <Button className="text-primary" />
      <Button theme="primary" />
    </div>
  );
}
