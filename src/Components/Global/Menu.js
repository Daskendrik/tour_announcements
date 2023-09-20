import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <NavLink to=".">Главная</NavLink>
      <NavLink to="tours">Предстоящие туры</NavLink>
      <NavLink to="backfeed">Обраная связь</NavLink>
    </div>
  );
};

export default Menu;
