import Header from './components/Header';
import Main from './components/Main';
import {Route, Routes} from 'react-router-dom';
import {getToken} from './api/token';
import {useDispatch} from 'react-redux';
import {updateToken} from './store/tokenReducer';

function App() {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

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
