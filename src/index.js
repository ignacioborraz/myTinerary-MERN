//importo de librerias externas
import React from 'react'
import ReactDOM from 'react-dom'

//importo las páginas que se van a renderizar
import App from './App'

//importo los componentes de REDUX:
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import mainReducer from './redux/reducers/mainReducer'

const reduxStore = createStore(mainReducer,applyMiddleware(thunk)) //creamos un almacenamiento de redux
//el almacenamiento depende de un reductor y de una funcion ptotenciadora de middleware
//es necesario que tengamos UN solo almacenamiento, es por eso que mainReducer es una combinacion de los reductores de distintas acciones

ReactDOM.render( //a la pantalla, le aplico el método render para imprimir lo siguiente:
    <React.StrictMode> {/* usamos el modo estricto de react */}
        <Provider store={reduxStore}> {/* aplicamos el almacenamiento a toda la App */}
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root') //selecciono la "raiz" del index.html, donde se imprimirá el renderizado
);


/* COLORES:
rgb(74, 140, 111) //verde oscuro
rgb(126, 196, 165) //verde neutro
rgb(165, 126, 196) //violeta
rgb(196, 165, 126) //marron
rgb(207, 238, 228) //verde claro
*/

//BILLETTITOS
//{"💵".repeat(parseInt(itinerary.price))}