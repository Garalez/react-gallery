import style from './Main.module.css';
import Layout from '../Layout';
import Gallery from './Gallery';
// import {Route, Routes} from 'react-router-dom';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Gallery />
    </Layout>
  </main>
);
