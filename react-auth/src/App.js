import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Notes from './pages/Notes';
import LoginPage from './pages/LoginPage';
import Navs from './components/Navs';
import RequireAuth from './components/RequireAuth';
import Signup from './pages/Signup';
import LogoutPage from './pages/LogoutPage';
import Star from './pages/Star';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navs/>
        <Routes>
          <Route path='/' element={<RequireAuth><Notes/></RequireAuth>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/logout' element={<LogoutPage/>}/>
          <Route path='/star' element={<Star/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
