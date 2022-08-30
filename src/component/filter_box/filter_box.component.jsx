import './filter_box.style.scss';

export const FilterBox = (props) => {
  const { handle, search, selectOptions } = props;
  const { handleChange } = handle;
  const { searchFields } = search;
  const { selectAttributeOptions, selectRoleOptions } = selectOptions;

  return (
    <div className='filter-box-container'>
      {/* INPUT SEARCH */}
      <label htmlFor='search'>Search</label>
      <input type='search' name='search' id='' value={searchFields.search} onChange={handleChange} />
      {/* ATTRIBUTE SELECTOR */}
      <label htmlFor='attribute'>Attribute</label>
      <select name='attribute' value={searchFields.attribute} onChange={handleChange}>
        {selectAttributeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {/* ROLE SELECTOR */}
      <label htmlFor='role'>Role</label>
      <select name='role' value={searchFields.role} onChange={handleChange}>
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
