import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../../component/button/button.component';
import { BuildContext } from '../../context/build.context';

import { MdDelete, MdOutlineRemoveRedEye } from 'react-icons/md';
import './builds.style.scss';

export const Builds = ({ className }) => {
  const [builds, setBuilds] = useContext(BuildContext);
  let navigate = useNavigate();

  function handleRemove(id) {
    const newList = builds.filter((item) => item.id !== id);

    setBuilds(newList);
  }

  function handleEdit(id) {
    navigate(`/builds/${id}`);
  }

  return (
    <div className='clash-container'>
      <h1>Builds</h1>
      <Link to='new'>
        <Button>Create Build</Button>
      </Link>
      <div className={`${className} builds_container`}>
        {builds.map((build) => {
          return (
            <div key={build.id} className='build_container'>
              <div className='icons_group'>
                <MdOutlineRemoveRedEye onClick={() => handleEdit(build.id)} />
                <MdDelete onClick={() => handleRemove(build.id)} />
              </div>
              <h5>{build.name}</h5>
              <h3>
                Hero: <span>{build.hero}</span>
              </h3>
              {/* {build.items.early.length !== 0 ? <h3>Early Game:</h3> : null}
              <ul>
                {build.items.early.map((item) => (
                  <li key={item.id}>{item.value}</li>
                ))}
              </ul>
              {build.items.mid.length !== 0 ? <h3>Mid Game:</h3> : null}
              <ul>
                {build.items.mid.map((item) => (
                  <li key={item.id}>{item.value}</li>
                ))}
              </ul>
              {build.items.late.length !== 0 ? <h3>Late Game:</h3> : null}
              <ul>
                {build.items.late.map((item) => (
                  <li key={item.id}>{item.value}</li>
                ))}
              </ul>
              {build.items.optional.length !== 0 ? <h3>Optional Items:</h3> : null}
              <ul>
                {build.items.optional.map((item) => (
                  <li key={item.id}>{item.value}</li>
                ))}
              </ul> */}
            </div>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};
