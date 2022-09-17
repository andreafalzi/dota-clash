import { useEffect, useState } from 'react';

import './heroes.style.scss';
import { Card } from '../../component/card/card.component';
import { FilterBox } from '../../component/filter_box/filter_box.component';

export const Heroes = ({ heroes, url, className }) => {
  const selectRoleOptions = [
    { value: '', text: 'All' },
    { value: 'Carry', text: 'Carry' },
    { value: 'Escape', text: 'Escape' },
    { value: 'Nuker', text: 'Nuker' },
    { value: 'Initiator', text: 'Initiator' },
    { value: 'Durable', text: 'Durable' },
    { value: 'Disabler', text: 'Disabler' },
    { value: 'Jungler', text: 'Jungler' },
    { value: 'Support', text: 'Support' },
    { value: 'Pusher', text: 'Pusher' },
  ];

  const selectAttributeOptions = [
    { value: '', text: 'All' },
    { value: 'str', text: 'Strength' },
    { value: 'agi', text: 'Agility' },
    { value: 'int', text: 'Intellect' },
  ];

  const defaultSearchFields = {
    attribute: '',
    role: '',
    search: '',
  };

  const [filteredList, setFilteredList] = useState(heroes);
  const [searchFields, setSearchFields] = useState(defaultSearchFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSearchFields({ ...searchFields, [name]: value });
  };

  useEffect(() => {
    const filterBySearch = (filteredList) => {
      // Avoid filter for empty string
      if (!searchFields.search) {
        return filteredList;
      }
      const filteredHeroes = filteredList.filter((item) => item.localized_name.toLowerCase().includes(searchFields.search.toLowerCase()));
      return filteredHeroes;
    };

    const filterSelectedAttribute = (filteredList) => {
      // Avoid filter for empty string
      if (!searchFields.attribute) {
        return filteredList;
      }
      const filteredHeroes = filteredList.filter((item) => item.primary_attr.includes(searchFields.attribute));
      return filteredHeroes;
    };

    const filterSelectedRole = (filteredList) => {
      // Avoid filter for empty string
      if (!searchFields.role) {
        return filteredList;
      }
      const filteredHeroes = filteredList.filter((item) => item.roles.includes(searchFields.role));
      return filteredHeroes;
    };

    var filteredList = filterSelectedAttribute(heroes);
    filteredList = filterSelectedRole(filteredList);
    filteredList = filterBySearch(filteredList);
    setFilteredList(filteredList);
  }, [searchFields.attribute, searchFields.role, searchFields.search, heroes]);

  return (
    <>
      <h1>Heroes</h1>
      <div className='flex-container'>
        <FilterBox handle={handleChange} value={searchFields} selectOptions={{ selectAttributeOptions, selectRoleOptions }} />
        <div className={className}>
          {filteredList.length > 0 ? (
            filteredList.map((hero, index) => {
              return <Card key={index} heroes={hero} imgUrl={url} />;
            })
          ) : (
            <h3 style={{ color: 'white' }}>No result found</h3>
          )}
        </div>
      </div>
    </>
  );
};
