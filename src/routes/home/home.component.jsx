import { Link } from 'react-router-dom';

import './home.style.scss';

export const Home = () => {
  return (
    <div className='home_section'>
      <h1>Welcome in Dota Wiki</h1>
      <div className='home_link_container'>
        <Link className='home_link' to='heroes'>
          <p>Heroes</p>
          <p>
            <em>Learn about your favorite Hero</em>
          </p>
        </Link>
        <Link className='home_link' to='abilities'>
          <p>Abilities</p>
          <p>
            <em>Check your opponents abilities</em>
          </p>
        </Link>
        <Link className='home_link' to='items'>
          <p>Items</p>
          <p>
            <em>Items are powerfull tools</em>
          </p>
        </Link>
        <Link className='home_link' to='builds'>
          <p>Builds</p>
          <p>
            <em>Build up your Hero</em>
          </p>
        </Link>
      </div>
    </div>
  );
};
