import { useEffect, useState } from 'react';

import './heroes.style.scss';
import { Card } from '../../component/card/card.component';
import { FilterBox } from '../../component/filter_box/filter_box.component';

export const Heroes = ({ heroes, url, className }) => {
  const roleArr = ['carry', 'escape', 'nuker', 'initiator', 'durable', 'disabler', 'jungler', 'support', 'pusher'];

  const selectAttributeOptions = [
    { value: '', text: '' },
    { value: 'str', text: 'Strength' },
    { value: 'agi', text: 'Agility' },
    { value: 'int', text: 'Intellect' },
  ];

  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchRole, setSearchRole] = useState('');
  const [searchAttribute, setSearchAttribute] = useState(selectAttributeOptions[0].value);

  //Search Attribute Functionality
  const handleSearchAttribute = (event) => {
    // setSearchInput('');
    setSearchAttribute(event.target.value);
  };

  useEffect(() => {
    const resultsAttribute = heroes.filter((hero) => hero.primary_attr.toLowerCase().includes(searchAttribute));
    setSearchResult(resultsAttribute);
  }, [searchAttribute, heroes]);

  //Search Role Functionality (not finished)
  const handleSearchRole = (event) => setSearchRole(event.target.value);

  useEffect(() => {
    const resultsRole = heroes.filter((hero) => hero.roles.filter((role) => role.toLowerCase().includes(searchRole)));
    setSearchResult(resultsRole);
  }, [searchRole, heroes]);

  //Search Form Functionality
  const handleSearch = (event) => {
    setSearchInput(event.target.value);
    setSearchAttribute('');
  };

  useEffect(() => {
    const resultsName = heroes.filter((hero) => hero.localized_name.toLowerCase().includes(searchInput.toLowerCase()));
    setSearchResult(resultsName);
  }, [searchInput, heroes]);

  return (
    <>
      <h1>Heroes</h1>
      <div className='flex-container'>
        <FilterBox handle={{ handleSearch, handleSearchRole, handleSearchAttribute }} search={{ searchInput, searchRole, searchAttribute }} roleArr={roleArr} selectAttributeOptions={selectAttributeOptions} />
        <div className={className}>
          {searchResult.map((hero, index) => {
            return <Card key={index} heroes={hero} imgUrl={url} />;
          })}
        </div>
      </div>
    </>
  );
};
