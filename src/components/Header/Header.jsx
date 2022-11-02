import style from './Header.module.css';
import Menu from './Menu';

export const Header = () => (
  <header className={style.header}>
    <Menu />
  </header>
);
