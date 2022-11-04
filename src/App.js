import Header from './components/Header';
import Main from './components/Main';
import {Route, Routes} from 'react-router-dom';
import {getCode} from './api/code';
import {useDispatch} from 'react-redux';
import {updateCode} from './store/codeReducer';
import {updateToken} from './store/token/tokenAction';

function App() {
  const dispatch = useDispatch();
  dispatch(updateCode(getCode()));
  if (localStorage.getItem('bearer')) {
    dispatch(updateToken(localStorage.getItem('bearer')));
  }

  return (
    <Routes>
      <Route
        path='*'
        element={
          <>
            <Header />
            <Main />
          </>
        }
      />
    </Routes>
  );
}

export default App;
