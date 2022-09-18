import './select_box.style.scss';

export const SelectBox = ({ options, name, children, ...otherProps }) => {
  return (
    <div className='select_input_group'>
      <label htmlFor={name}>{children}</label>
      <select name={name} {...otherProps} className='select_input'>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};
