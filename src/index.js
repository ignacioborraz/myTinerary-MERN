//index.js llama a app: en app configuramos TOOODO

import React from 'react'; //importo paquetes de react
import ReactDOM from 'react-dom'; //importo la pantalla de REACT (es donde imprimo la web)
import './index.css'; //importo estilo de index
//import reportWebVitals from './reportWebVitals'; //no entendí para que está
import App from './App'; //importo la app (lo primero que se renderiza/imprime en pantalla/HTML)

ReactDOM.render( //a la pantalla, le aplico el método render para imprimir lo siguiente:
  <React.StrictMode>
    <App /> {/* imprimo la app en pantalla */}
  </React.StrictMode>,
  document.getElementById('root') //selecciono la "raiz" del index.html
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(); //no entendí para que está
