import { useEffect, useState } from 'react';

import './heroes.style.scss';
import { Card } from '../../component/card/card.component';
import { FilterBox } from '../../component/filter_box/filter_box.component';

export const Heroes = ({ heroes, url, className }) => {
  const selectRoleOptions = [
    { value: '', text: '' },
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
    { value: '', text: '' },
    { value: 'str', text: 'Strength' },
    { value: 'agi', text: 'Agility' },
    { value: 'int', text: 'Intellect' },
  ];

  const defaultSearchFields = {
    attribute: '',
    role: '',
    search: '',
  };

  const [searchFields, setSearchFields] = useState(defaultSearchFields);
  const [searchResult, setSearchResult] = useState(heroes);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSearchFields({ ...searchFields, [name]: value });

    // if(searchFields.attribute && searchFields.role && searchFields.search)

    // switch (name) {
    //   case 'attribute':

    //     break;

    //   default:
    //     break;
    // }
  };

  // function search(heroes) {
  //   if (searchFields.search !== '') {
  //     //filter
  //     console.log('you are searching');
  //     const results = console.log('you are searching');
  //     setSearchResult(results);
  //   } else {
  //     console.log('search is empty');
  //   }
  // }

  // console.log(searchResult);
  console.log(searchFields);

  // //Search Form Functionality

  // useEffect(() => {
  //   const results = heroes.filter((hero) => hero.localized_name.toLowerCase().includes(searchFields.search.toLowerCase()));
  //   setSearchResult(results);
  //   console.log('searchResult:', results);
  // }, [searchFields.search, heroes]);

  // //Search Role Functionality
  // useEffect(() => {
  //   const results = heroes.filter((hero) => hero.roles.includes(searchFields.role));
  //   setSearchResult(results);
  //   console.log('roleResult:', results);
  // }, [searchFields.role, heroes]);

  // //Search Attribute Functionality

  // useEffect(() => {
  //   const results = heroes.filter((hero) => hero.primary_attr.includes(searchFields.attribute));
  //   setSearchResult(results);
  //   console.log('attributeResult:', results);
  // }, [searchFields.attribute, heroes]);

  // console.log('stateResult:', searchResult);

  return (
    <>
      <h1>Heroes</h1>
      <div className='flex-container'>
        <FilterBox handle={{ handleChange }} search={{ searchFields }} selectOptions={{ selectAttributeOptions, selectRoleOptions }} />
        <div className={className}>
          {searchResult
            .filter((hero) => hero.roles.includes(searchFields.role))
            .map((hero, index) => {
              return <Card key={index} heroes={hero} imgUrl={url} />;
            })}
        </div>
      </div>
    </>
  );
};
