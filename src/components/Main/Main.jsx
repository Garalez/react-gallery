import style from './Main.module.css';
import Layout from '../Layout';
import Gallery from './Gallery';
import FullScreenPhoto from './FullScreenPhoto';
import {Route, Routes} from 'react-router-dom';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Routes>
        <Route path='/photos/:id' element={<FullScreenPhoto />} />
        <Route path='*' element={<Gallery />} />
      </Routes>
    </Layout>
  </main>
);
