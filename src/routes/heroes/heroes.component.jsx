import { useEffect, useState } from 'react';

import './heroes.style.scss';
import { Card } from '../../component/card/card.component';
import { SearchBox } from '../../component/search_box/search_box.component';
import { SelectBox } from '../../component/select_box/select_box.component';

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
        <div className='filter-box-container'>
          {/* INPUT SEARCH */}
          <SearchBox labelName='search' type='search' name='search' onChange={handleChange} value={searchFields.search}>
            Search
          </SearchBox>
          {/* ATTRIBUTE SELECTOR */}
          <label htmlFor='attribute'>Attribute</label>
          <SelectBox options={selectAttributeOptions} name='attribute' onChange={handleChange} value={searchFields.attribute} />
          {/* ROLE SELECTOR */}
          <label htmlFor='role'>Role</label>
          <SelectBox options={selectRoleOptions} name='role' onChange={handleChange} value={searchFields.role} />
        </div>
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
