//importo de librerias externas
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

//importo los estilos
import './styles/styles.css'

//importo las páginas que se van a renderizar
import Home from './pages/Home';
import Cities from './pages/cities';
import CityDetail from './pages/cityDetail';
import LogIn from './pages/login';
import SignUp from './pages/signup';

export default function App() {
    return (
        <BrowserRouter> {/* buscador de rutas */}
            <Routes> 
                <Route path="/cities" element={<Cities />} /> {/* en path se coloca la ruta del archivo que se busca */}
                <Route path ="/cities/:id" element={<CityDetail />}/> v
                <Route path='/login' element={<LogIn  />} />
                <Route path='/signup' element={<SignUp  />} />
                <Route path="/*" index element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}