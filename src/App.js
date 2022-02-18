//app llama al resto de componentes que estructuran la web

import React from 'react' //importo paquetes de react
import NavBar from './components/navBar' //importo el nav
import {BrowserRouter, Routes, Route} from "react-router-dom"; //importo las variables necesarias para configurar las rutas
import Home from './components/home';
import Cities from './components/cities';
import LogIn from './components/login';
import LogUp from './components/logup';
import './App.css';

export default function App () {

  return (
    <>
      <BrowserRouter> {/* configuramos las rutas que apareceran en la URL cada vez que se clickee algo */}
        <div className='allTheApp'>
          <NavBar/> {/* llamamos al nav */}
            <Routes> 
              <Route path="*" index element={<Home/>}/> {/* en path se coloca la ruta del archivo que se busca */}
              <Route path="/cities" element={<Cities/>}/> {/* en element se coloca la funcion a la que se va a llamar */}
              <Route path='/login' element={<LogIn/>}/>
              <Route path="/logup" element={<LogUp/>}/>
              {/* <Route path ="/cards/:id" element={<CityCard/>}/> */}
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};