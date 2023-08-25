
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ManiPage from './components/MainPage';

import Password from './components/Password';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<ManiPage/>}></Route>
      <Route path='/user' element={<ManiPage/>}></Route>
    <Route path='/password/:user_id' element={<Password/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
