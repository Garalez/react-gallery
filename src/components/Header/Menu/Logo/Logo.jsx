import {useNavigate} from 'react-router-dom';
import style from './Logo.module.css';

export const Logo = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return <button className={style.logo} onClick={(e) => handleClick(e)} />;
};
