import { Link } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';
import './navigation.style.scss';
import { useEffect, useState } from 'react';
// import { useEffect } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);

  //navbar scroll changeToFixed function
  const changeToFixed = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeToFixed();
    // adding the event when scroll change ToFixed
    window.addEventListener('scroll', changeToFixed);
  });

  const handleLink = () => {
    goToTop();
    setIsOpen((prev) => !prev);
  };
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // useEffect(() => {
  //   isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
  // }, [isOpen]);

  return (
    <nav className={navbar ? 'scrollFixed' : ''}>
      <div className='container'>
        <div className='nav_bar'>
          <div className='nav-menu'>{isOpen ? <MdClose onClick={() => setIsOpen((prev) => !prev)} /> : <MdMenu onClick={() => setIsOpen((prev) => !prev)} />}</div>
          <ul className={`${isOpen ? 'visible' : ''} ul_menu`}>
            <Link className='nav_link' to='/' onClick={handleLink}>
              Home
            </Link>

            <Link className='nav_link' to='heroes' onClick={handleLink}>
              Heroes
            </Link>

            <Link className='nav_link' to='abilities' onClick={handleLink}>
              Abilities
            </Link>

            <Link className='nav_link' to='items' onClick={handleLink}>
              Items
            </Link>

            <Link className='nav_link' to='builds' onClick={handleLink}>
              Builds
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
