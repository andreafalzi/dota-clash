import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import './build.style.scss';
import { BuildContext } from '../../context/build.context';
import { Button } from '../../component/button/button.component';

export const Build = () => {
  const [builds] = useContext(BuildContext);
  let params = useParams();

  const singleBuild = builds.find((build) => build.id === params.id);

  return (
    <>
      <h1>{singleBuild.name}</h1>
      <Link to='/builds'>
        <Button>Back to Builds</Button>
      </Link>
      <div className='form_overview_build' style={{ marginTop: '2rem' }}>
        <h3>Overview</h3>
        <h4>
          Build Name: <span>{singleBuild.name}</span>
        </h4>
        <h4>
          Hero: <span>{singleBuild.hero}</span>
        </h4>

        <h4>Early Game:</h4>
        <div className='container_item_box'>
          {singleBuild.items.early.map(({ id, value }) => {
            return (
              <div className='item_box green' key={id}>
                <span>{value}</span>
              </div>
            );
          })}
        </div>

        <h4>Mid Game:</h4>
        <div className='container_item_box'>
          {singleBuild.items.mid.map(({ id, value }) => {
            return (
              <div className='item_box yellow' key={id}>
                <span>{value}</span>
              </div>
            );
          })}
        </div>

        <h4>Late Game:</h4>
        <div className='container_item_box'>
          {singleBuild.items.late.map(({ id, value }) => {
            return (
              <div className='item_box red' key={id}>
                <span>{value}</span>
              </div>
            );
          })}
        </div>
        <h4>Optional:</h4>
        <div className='container_item_box'>
          {singleBuild.items.optional.map(({ id, value }) => {
            return (
              <div className='item_box blue' key={id}>
                <span>{value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
