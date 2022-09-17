import { Outlet } from 'react-router-dom';
import { Navigation } from '../../component/navigation/navigation.components';
import BACKGROUND from '../../assets/wallpaperflare.com_wallpaper.jpg';
import './layout.style.scss';

export function Layout() {
  const divStyle = {
    backgroundImage: `url(${BACKGROUND})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };
  return (
    <div style={divStyle} className='layout'>
      <Navigation />
      <div className='container'>
        <Outlet />
      </div>
    </div>
  );
}
