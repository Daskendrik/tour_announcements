import Menu from './Menu';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default Layout;
