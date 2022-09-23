import './noResult.style.scss';
import BACKGROUND from '../../assets/wallpaperflare.com_wallpaper.jpg';

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../component/button/button.component';

const NoResult = () => {
  const divStyle = {
    backgroundImage: `url(${BACKGROUND})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };
  return (
    <div style={divStyle} className='no_result_container'>
      <h1>Ooopsss... you have landend on a wrong path!</h1>
      <Link to={'/'}>
        <Button>Take me back Home</Button>
      </Link>
    </div>
  );
};

export default NoResult;
