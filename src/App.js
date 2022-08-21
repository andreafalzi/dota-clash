import { useEffect, useState } from 'react';
import './App.css';
import dataHeroes from './heroes.json';
import abilitiesHeroes from './abilities.json';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const url = 'https://cdn.cloudflare.steamstatic.com/';

  useEffect(() => {
    setHeroes(dataHeroes);
    setAbilities(abilitiesHeroes);
  }, []);

  return (
    <div className='App'>
      <h1>Heroes</h1>
      <div className='grid'>
        {heroes.map(({ localized_name, name, img, id, icon }) => {
          return (
            <div key={id}>
              <h2>
                <img src={`${url}${icon}`} alt={name} />
                {localized_name}
              </h2>
              <img src={`${url}${img}`} alt={name} />
            </div>
          );
        })}
      </div>
      <h1>Abilities</h1>
      <div className='grid'>
        {abilities.map(({ dname, desc, img }, index) => {
          return (
            <div key={index}>
              <h2>{dname}</h2>
              <img src={`${url}${img}`} alt={dname} />
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
