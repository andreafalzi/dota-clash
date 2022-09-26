import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import './navigation.style.scss';
import { useState } from 'react';
// import { useEffect } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
  // }, [isOpen]);

  return (
    <nav>
      <div className='container'>
        <div className='nav_bar'>
          <div className='nav-menu'>
            <MdMenu onClick={() => setIsOpen(!isOpen)} />
          </div>
          <ul className={`${isOpen ? 'visible' : ''} ul_menu`}>
            <Link className='nav_link' to='/' onClick={() => setIsOpen(!isOpen)}>
              Home
            </Link>

            <Link className='nav_link' to='heroes' onClick={() => setIsOpen(!isOpen)}>
              Heroes
            </Link>

            <Link className='nav_link' to='abilities' onClick={() => setIsOpen(!isOpen)}>
              Abilities
            </Link>

            <Link className='nav_link' to='items' onClick={() => setIsOpen(!isOpen)}>
              Items
            </Link>

            <Link className='nav_link' to='builds' onClick={() => setIsOpen(!isOpen)}>
              Builds
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
