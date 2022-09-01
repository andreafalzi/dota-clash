import { useState } from 'react';

import './heroes.style.scss';
import { Card } from '../../component/card/card.component';
// import { FilterBox } from '../../component/filter_box/filter_box.component';

export const Heroes = ({ heroes, url, className }) => {
  // the value of the search field
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(heroes);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = heroes.filter((user) => {
        return user.localized_name.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(heroes);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  const filterAttribute = (e) => {
    const keyword = e.target.value;

    if (keyword !== 'All') {
      const results = heroes.filter((user) => {
        return user.primary_attr.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(heroes);
      // If the text field is empty, show all users
    }
  };

  return (
    <div className='flex-container'>
      <div className='filter-box-container'>
        <label htmlFor='search-form'>
          <input type='search' name='search' id='search-form' className='search-input' placeholder='Search for...' value={name} onChange={filter} />
        </label>

        <select onChange={filterAttribute} name='attribute' className='custom-select' aria-label='Filter Hereos By Attributes'>
          <option value='All'>Filter By Attributes</option>
          <option value='str'>Strength</option>
          <option value='agi'>Agility</option>
          <option value='int'>Intellect</option>
        </select>
      </div>

      <div className={className}>
        {foundUsers.map((hero, index) => {
          return <Card key={index} heroes={hero} imgUrl={url} />;
        })}
      </div>
    </div>
  );
};
