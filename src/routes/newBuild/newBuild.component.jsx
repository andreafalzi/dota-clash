import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../component/button/button.component';
import { FormInput } from '../../component/form_input/form_input.component';

import { BuildContext } from '../../context/build.context';

import { MdDownloadDone, MdDelete } from 'react-icons/md';
import { v4 as uuid } from 'uuid';
import './newBuild.style.scss';

export const NewBuild = () => {
  const [builds, setBuilds] = useContext(BuildContext);
  let navigate = useNavigate();
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 4);

  const defaultForm = {
    name: '',
    hero: '',
    early: [],
    mid: [],
    late: [],
    optional: [],
  };

  const submitForm = {
    id: '',
    name: '',
    hero: '',
    items: {
      early: [],
      mid: [],
      late: [],
      optional: [],
    },
  };
  const fillSubmitForm = (submitForm) => {
    submitForm.id = small_id;
    submitForm.name = formFields.name;
    submitForm.hero = formFields.hero;
    submitForm.items.early = earlyArr;
    submitForm.items.mid = midArr;
    submitForm.items.late = lateArr;
    submitForm.items.optional = optionalArr;
  };

  const [formFields, setFormFields] = useState(defaultForm);
  const [earlyArr, setEarlyArr] = useState([]);
  const [midArr, setMidArr] = useState([]);
  const [lateArr, setLateArr] = useState([]);
  const [optionalArr, setOptionalArr] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const addValue = (event) => {
    event.preventDefault();

    //.currentTarget to work with imported Icons from Icons-React
    const { name, value } = event.currentTarget;

    if (value !== '') {
      switch (name) {
        case 'early':
          setEarlyArr([...earlyArr, { id: small_id, value: value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() }]);
          break;

        case 'mid':
          setMidArr([...midArr, { id: small_id, value: value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() }]);
          break;

        case 'late':
          setLateArr([...lateArr, { id: small_id, value: value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() }]);
          break;

        case 'optional':
          setOptionalArr([...optionalArr, { id: small_id, value: value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() }]);
          break;

        default:
          break;
      }
    }
  };

  const removeValue = (id, name) => {
    let newList = undefined;

    switch (name) {
      case 'early':
        newList = earlyArr.filter((item) => item.id !== id);
        setEarlyArr(newList);
        break;

      case 'mid':
        newList = midArr.filter((item) => item.id !== id);
        setMidArr(newList);
        break;

      case 'late':
        newList = lateArr.filter((item) => item.id !== id);
        setLateArr(newList);
        break;

      case 'optional':
        newList = optionalArr.filter((item) => item.id !== id);
        setOptionalArr(newList);
        break;

      default:
        break;
    }
  };

  const resetDefault = (event) => {
    event.preventDefault();
    setFormFields(defaultForm);
    setEarlyArr([]);
    setMidArr([]);
    setLateArr([]);
    setOptionalArr([]);
  };

  const handleBuildSubmit = (event) => {
    event.preventDefault();
    fillSubmitForm(submitForm);
    setBuilds((prevBuilds) => [...builds, submitForm]);
    navigate('/builds');
  };

  const { name, hero, early, mid, late, optional } = formFields;
  return (
    <>
      <h1>New Build</h1>
      <div className='new_build_container'>
        <form className='form_new_build' onSubmit={handleBuildSubmit}>
          <h3>Builder</h3>
          <div className='form_new_build_section'>
            <FormInput labelName='name' type='text' required onChange={handleChange} name='name' value={name}>
              Build Name
            </FormInput>
          </div>
          <div className='form_new_build_section'>
            <FormInput labelName='hero' type='text' required onChange={handleChange} name='hero' value={hero}>
              Choose your hero
            </FormInput>
          </div>
          <div className='form_new_build_section'>
            <FormInput labelName='early' type='text' onChange={handleChange} name='early' value={early}>
              Choose early game items
            </FormInput>
            <div className='buttons_group'>
              <Button type='button' onClick={addValue} name='early' value={early}>
                <MdDownloadDone />
              </Button>
            </div>
          </div>
          <div className='form_new_build_section'>
            <FormInput labelName='mid' type='text' onChange={handleChange} name='mid' value={mid}>
              Choose mid game items
            </FormInput>
            <div className='buttons_group'>
              <Button type='button' onClick={addValue} name='mid' value={mid}>
                <MdDownloadDone />
              </Button>
            </div>
          </div>
          <div className='form_new_build_section'>
            <FormInput labelName='late' type='text' onChange={handleChange} name='late' value={late}>
              Choose late game items
            </FormInput>
            <div className='buttons_group'>
              <Button type='button' onClick={addValue} name='late' value={late}>
                <MdDownloadDone />
              </Button>
            </div>
          </div>
          <div className='form_new_build_section'>
            <FormInput labelName='optional' type='text' onChange={handleChange} name='optional' value={optional}>
              Choose optional items
            </FormInput>
            <div className='buttons_group'>
              <Button type='button' onClick={addValue} name='optional' value={optional}>
                <MdDownloadDone />
              </Button>
            </div>
          </div>
          <div className='buttons_group'>
            <Button type='submit' disabled={name === '' || hero === '' ? 'disabled' : ''}>
              Save
            </Button>
            <Button type='button' onClick={resetDefault}>
              Reset
            </Button>
          </div>
        </form>

        <div className='form_new_build'>
          <h3>Preview</h3>
          <h4>
            Build Name: <span>{name}</span>
          </h4>
          <h4>
            Hero: <span>{hero}</span>
          </h4>

          <h4>Early Game:</h4>
          <div className='container_item_box'>
            {earlyArr.map(({ id, value }) => {
              return (
                <div className={`item_box green ${value.length ? 'show':''}`} key={id}>
                  <span>{value}</span>
                  <MdDelete onClick={() => removeValue(id, 'early')} />
                </div>
              );
            })}
          </div>

          <h4>Mid Game:</h4>
          <div className='container_item_box'>
            {midArr.map(({ id, value }) => {
              return (
                <div className='item_box yellow' key={id}>
                  <span>{value}</span>
                  <MdDelete onClick={() => removeValue(id, 'mid')} />
                </div>
              );
            })}
          </div>

          <h4>Late Game:</h4>
          <div className='container_item_box'>
            {lateArr.map(({ id, value }) => {
              return (
                <div className='item_box red' key={id}>
                  <span>{value}</span>
                  <MdDelete onClick={() => removeValue(id, 'late')} />
                </div>
              );
            })}
          </div>
          <h4>Optional:</h4>
          <div className='container_item_box'>
            {optionalArr.map(({ id, value }) => {
              return (
                <div className='item_box blue' key={id}>
                  <span>{value}</span>
                  <MdDelete onClick={() => removeValue(id, 'optional')} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
