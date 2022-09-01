import './filter_box.style.scss';

export const FilterBox = (props) => {
  const { handle, value, selectOptions } = props;
  const { search, attribute, role } = value;
  const { selectAttributeOptions, selectRoleOptions } = selectOptions;

  return (
    <div className='filter-box-container'>
      {/* INPUT SEARCH */}
      <label htmlFor='search'>Search</label>
      <input type='search' name='search' onChange={handle} value={search} />
      {/* ATTRIBUTE SELECTOR */}
      <label htmlFor='attribute'>Attribute</label>
      <select name='attribute' onChange={handle} value={attribute}>
        {selectAttributeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {/* ROLE SELECTOR */}
      <label htmlFor='role'>Role</label>
      <select name='role' onChange={handle} value={role}>
        {selectRoleOptions.map((role) => {
          return (
            <option key={role.value} value={role.value}>
              {role.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};
