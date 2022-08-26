import './navigation.style.scss';

export const Navigation = ({ setCurrentTab }) => {
  const navList = ['Home', 'Heroes', 'Abilities', 'Dota Clash'];
  return (
    <nav className='navbar full-bleed'>
      <ul>
        {navList.map((item, index) => {
          return (
            <li key={index} onClick={(e) => setCurrentTab(e.target.innerHTML)}>
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
