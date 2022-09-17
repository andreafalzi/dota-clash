import { Link } from 'react-router-dom';

import './home.style.scss';

export const Home = () => {
  return (
    <div>
      <h1>Welcome in Dota Fan Site</h1>
      <div className='home_link_container'>
        <Link className='home_link' to='heroes'>
          Heroes
        </Link>
        <Link className='home_link' to='abilities'>
          Abilities
        </Link>
        <Link className='home_link' to='items'>
          Items
        </Link>
        <Link className='home_link' to='builds'>
          Builds
        </Link>
      </div>
    </div>
  );
};
