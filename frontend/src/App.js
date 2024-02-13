
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';
import { useSelector } from 'react-redux';


function App() {
  const { isAuthentication } = useSelector(state => state.login);
  return (

    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path='/*' element={
            <div className="mainAdmin">
              
                  <Login /> 
            </div>
          } />

          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
