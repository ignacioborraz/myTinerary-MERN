//index.js llama a app: en app configuramos TOOODO

import React from 'react'; //importo paquetes de react
import ReactDOM from 'react-dom'; //importo la pantalla de REACT (es donde imprimo la web)
import './styles/App.css'; //importo estilo de index
import App from './App'; //importo la app (lo primero que se renderiza/imprime en pantalla/HTML)

ReactDOM.render( //a la pantalla, le aplico el método render para imprimir lo siguiente:
  <React.StrictMode>
    <App /> {/* imprimo la app en pantalla */}
  </React.StrictMode>,
  document.getElementById('root') //selecciono la "raiz" del index.html
);
