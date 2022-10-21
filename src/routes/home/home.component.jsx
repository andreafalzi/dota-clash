import { Link } from 'react-router-dom';

import './home.style.scss';

export const Home = () => {
  const heroesBG = '/assets/heroes.jpg';
  const abilitiesBG = '/assets/abilities.jpg';
  const itemsBG = '/assets/items.jpg';
  const buildsBG = '/assets/builds.jpg';

  const handleLink = () => {
    goToTop();
  };
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='home_section'>
      <div className='home-hero container'>
        <h1>Dota Wiki</h1>
        <p>Dota is a series of strategy video games now developed by Valve. The series began in 2003 with the release of Defense of the Ancients (DotA), a fan-developed multiplayer online battle arena (MOBA) mod for the video game Warcraft III: Reign of Chaos and its expansion, The Frozen Throne. The original mod features gameplay centered around two teams of up to five players who assume control of individual characters called "heroes", which must coordinate to destroy the enemy's central base structure called an "Ancient", to win the game.</p>
      </div>
      <div className='home-bg-links'>
        <Link className='home-bg-link' style={{ backgroundImage: `url(${heroesBG})` }} to='heroes' onClick={handleLink}>
          <div className='first-animation'></div>
          <div className='second-animation'></div>
          <p className='container'>Heroes</p>
        </Link>
        <Link className='home-bg-link' style={{ backgroundImage: `url(${abilitiesBG})` }} to='abilities' onClick={handleLink}>
          <div className='first-animation-reverse'></div>
          <div className='second-animation-reverse'></div>
          <p className='container'>Abilities</p>
        </Link>
        <Link className='home-bg-link' style={{ backgroundImage: `url(${itemsBG})` }} to='items' onClick={handleLink}>
          <div className='first-animation'></div>
          <div className='second-animation'></div>
          <p className='container'>Items</p>
        </Link>
        <Link className='home-bg-link' style={{ backgroundImage: `url(${buildsBG})` }} to='builds' onClick={handleLink}>
          <div className='first-animation-reverse'></div>
          <div className='second-animation-reverse'></div>
          <p className='container'>Builds</p>
        </Link>
      </div>
      {/* <div className='home_link_container'>
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
      </div> */}
    </div>
  );
};
