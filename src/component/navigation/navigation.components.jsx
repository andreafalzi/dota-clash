import './navigation.style.scss';

export const Navigation = () => {
  const navList = ['Home', 'Heroes', 'Abilities', 'Dota Clash'];
  return (
    <nav className='navbar full-bleed'>
      <ul>
        {navList.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </nav>
  );
};
