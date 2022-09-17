import { Link } from 'react-router-dom';
import './navigation.style.scss';

export const Navigation = () => {
  return (
    <nav className='navbar full-bleed'>
      <ul>
        <Link className='nav_link' to='/'>
          Home
        </Link>

        <Link className='nav_link' to='heroes'>
          Heroes
        </Link>

        <Link className='nav_link' to='abilities'>
          Abilities
        </Link>

        <Link className='nav_link' to='items'>
          Items
        </Link>

        <Link className='nav_link' to='builds'>
          Builds
        </Link>
      </ul>
    </nav>
  );
};
