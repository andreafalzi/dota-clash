import { useState, useEffect } from 'react';
import { SearchBox } from '../../component/search_box/search_box.component';
import './abilities.style.scss';

export const Abilities = ({ abilities, url, className }) => {
  const [abilitiesState, setAbilitiesState] = useState([]);
  const [filteredList, setFilteredList] = useState(abilitiesState);
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const newAbilities = [];
    const checkAbilities = (abilities) => {
      abilities.forEach((ability) => {
        if (ability.mc === undefined) {
          ability = { ...ability, mc: ['0'] };
        }
        if (!Array.isArray(ability.mc)) {
          ability = { ...ability, mc: [ability.mc] };
        }
        if (ability.cd === undefined) {
          ability = { ...ability, cd: ['0'] };
        }
        if (!Array.isArray(ability.cd)) {
          ability = { ...ability, cd: [ability.cd] };
        }
        newAbilities.push(ability);
      });
    };

    checkAbilities(abilities);

    setAbilitiesState(newAbilities);
  }, [abilities]);

  useEffect(() => {
    const filtered = abilitiesState.filter((item) => item.dname.toLowerCase().includes(search.toLowerCase()));

    setFilteredList(filtered);
  }, [search, abilitiesState]);

  return (
    <>
      <h1>Abilities</h1>
      <SearchBox labelName='search' type='search' name='search' onChange={handleChange} value={search}>
        Search
      </SearchBox>
      <div className={`${className} abilities_container`}>
        {filteredList.map(({ dname, desc, img, mc, cd }, index) => {
          return (
            <div key={index} className='ability-card'>
              <h2>{dname}</h2>
              <div className='content'>
                <img src={`${url}${img}`} alt={dname} />
                <div className='inside-content'>
                  <p>{desc}</p>
                  {!mc.includes('0') && (
                    <p className='strong'>
                      Mana:
                      {mc.map((e, index) => (
                        <span key={index}> {e}</span>
                      ))}
                    </p>
                  )}

                  {!cd.includes('0') && (
                    <p className='strong'>
                      Cooldown:
                      {cd.map((e, index) => (
                        <span key={index}> {e}</span>
                      ))}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
