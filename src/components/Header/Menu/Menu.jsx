import style from './Menu.module.css';
import Auth from './Auth';
import Logo from './Logo';

export const Menu = () => (
  <div className={style.wrapper}>
    <Logo />
    <Auth />
  </div>
);
