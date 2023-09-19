import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <NavLink to=".">Главная</NavLink>
      <NavLink to="tours">Предстоящие туры</NavLink>
      <NavLink to="backfeed">Обраная связь</NavLink>
    </>
  );
};

export default Menu;
