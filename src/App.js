//app llama al resto de componentes que estructuran la web
//en app configuramos el buscador de rutas

import React from 'react' //importo paquetes de react
import {BrowserRouter, Routes, Route} from "react-router-dom"; //importo las variables necesarias para configurar las rutas
import Cities from './components/cities';
import LogIn from './components/login';
import Home from './Home';
import './styles/App.css'; //defino los estilos con un archivo aparte

export default function App () {

  return (
    <>
      <BrowserRouter> {/* buscador de rutas */}
        <Routes> 
            <Route path="/cities" element={<Cities />} /> {/* en path se coloca la ruta del archivo que se busca */}
            <Route path='/login' element={<LogIn  />} /> {/* en element se coloca la funcion a la que se va a llamar */}
            <Route path="*" index element={<Home />} />
            {/* <Route path ="/cards/:id" element={<CityCard />} /> */}
          </Routes>
      </BrowserRouter>
    </>
  );
};