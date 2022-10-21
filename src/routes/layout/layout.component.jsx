import { Outlet } from 'react-router-dom';
import { Navigation } from '../../component/navigation/navigation.components';
import './layout.style.scss';

const BACKGROUND = '/assets/appBG.jpg';
function Layout() {
  const divStyle = {
    backgroundImage: `url(${BACKGROUND})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };
  return (
    <div style={divStyle} className='layout'>
      <Navigation />
      <div className=' outlet_section'>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
