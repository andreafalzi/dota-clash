import { useParams } from 'react-router-dom';
import './build.style.scss';

export const Build = () => {
  let params = useParams();
  return <h1>Build {params.id}</h1>;
};
