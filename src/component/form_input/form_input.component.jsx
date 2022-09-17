import './form_input.style.scss';

export const FormInput = ({ labelName, children, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {/* another way to write if statement argumentToCheck && (result). It means that if the argument exist go on and show me the result*/}
      {labelName && <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{children}</label>}
    </div>
  );
};
