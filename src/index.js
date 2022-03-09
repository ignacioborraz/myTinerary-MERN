//importo de librerias externas
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route} from "react-router-dom"

//importo los estilos
import './styles/styles.css'

//importo las páginas que se van a renderizar
import Home from './pages/Home';
import Cities from './pages/cities';
import CityCard from './pages/cityCard';
import LogIn from './pages/login';

//importo los componentes de REDUX:
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './redux/reducers/mainReducer';

const reduxStore = createStore(mainReducer,applyMiddleware(thunk)) //creamos un almacenamiento de redux
//el almacenamiento depende de un reductor y de una funcion ptotenciadora de middleware
//es necesario que tengamos UN solo almacenamiento, es por eso que mainReducer es una combinacion de los reductores de distintas acciones

ReactDOM.render( //a la pantalla, le aplico el método render para imprimir lo siguiente:
    <React.StrictMode> {/* usamos el modo estricto de react */}
        <Provider store={reduxStore}> {/* aplicamos el almacenamiento a toda la App */}
            {console.log(reduxStore.getState())}
            <BrowserRouter> {/* buscador de rutas */}
                <Routes> 
                    <Route path="/cities" element={<Cities />} /> {/* en path se coloca la ruta del archivo que se busca */}
                    <Route path ="/cities/:id" element={<CityCard />}/> v
                    <Route path='/login' element={<LogIn  />} />
                    <Route path="/*" index element={<Home />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root') //selecciono la "raiz" del index.html, donde se imprimirá el renderizado
);
