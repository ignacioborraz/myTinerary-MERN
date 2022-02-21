//app llama al resto de componentes que estructuran la web

import React from 'react' //importo paquetes de react
import {BrowserRouter, Routes, Route} from "react-router-dom"; //importo las variables necesarias para configurar las rutas
import MyCarousel from './components/carousel'
import Cities from './components/cities';
import LogIn from './components/login';
import LogUp from './components/logup';
import Home from './Home';
import './App.css'; //defino los estilos con un archivo aparte

export default function App () {

  return (
    <>
      <BrowserRouter>
        <Home />{/* imprimo home en pantalla */}
        <Routes> 
              <Route path="*" index element={<MyCarousel />} /> {/* en path se coloca la ruta del archivo que se busca */}
              <Route path="/cities" element={<Cities />} /> {/* en element se coloca la funcion a la que se va a llamar */}
              <Route path='/login' element={<LogIn  />} />
              <Route path="/logup" element={<LogUp />} />
              {/* <Route path ="/cards/:id" element={<CityCard />} /> */}
            </Routes>
      </BrowserRouter>
    </>
  );
};