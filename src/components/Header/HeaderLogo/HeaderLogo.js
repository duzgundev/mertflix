import Logo from '@images/logo.png';

import { Link } from 'react-router-dom';

export default function HeaderLogo() {
  return (
    <Link to="/">
      <img className="w-40" src={Logo} />
    </Link>
  );
}
