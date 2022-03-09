/* 0 MERN: define a un paquete de software necesario para el desarrollo de páginas y aplicaciones web.
MongoDB: bases de datos no relacionales más usada.
Express: permite crear una infraestructura sólida para tu web, con el puedes manejar todo el Backend con NodeJS.
React: librería que permite desarrollar el Frontend de tu aplicación de una manera limpia, organizada y efectiva.
NodeJS: 


1. HABILITAR SCRIPTS:
    - Abrir PowerShell como administrador
    - Get-ExecutionPolicy
    - Set-ExecutionPolicy Unrestricted


2. INSTALAR LA VERSION LTS DE NODEJS:
    - https://nodejs.org/es/


3. CREAR UNA APP CON REACT:
    React puede crear componentes , que son como elementos HTML personalizados y reutilizables,
    para construir interfaces de usuario de manera rápida y eficiente.
    React agiliza la forma en que se almacenan y manejan los datos, utilizando state y prop
    Es necesario instalar REACT por primer y unica vez:
        npm install -g create-react-app
    Luego, para crear un proyecto:
        create-react-app nombre-del-proyecto
    Se puede instalar una libreria de estilos como materialUI, tailwindcss, bootstrap...


4. CREAR UN COMPONENTE REACT:
    Creamos un archivo Componente.js 
    Escribimos rafce para iniciar el componente.
    Los componentes van a renderizar paginas completas (pages) o algunas partes de (components)
    Puede ser componentes de clase o funcionales.
    Todos los componentes son independientes y reutilziables.
    Todos los componentes se exportan/importan.


5. CONFIGURAR LAS RUTAS (URL):
    npm i react-router-dom
    - BrowserRouter (Router): Este inyecta propiedades a nuestro componente para poder acceder al historial de navegación, realizar redirecciones, etc.
    - Routes: Este creara un nuevo objeto el cual contendra como hijo a cada route definida con su respectivo componente
    - Route: depende de dos parametros: las rutas y el componente a renderizar para esa ruta
    - Link: Este es utilizado para los enlaces (igual como etiquetas <a></a>)

_ mongoose una librería que nos permite modelar la data de la base de datos facilmente, establece los paramtros de conexion 
controlador: pedidos */

/* REDUX
en el front:
npm install react-redux redux redux-thunk

creamos el reduxStore con el metodo createStore en index.js
importamos las dependencias que necesita
y creamos las carpetas redux (con accions y reducers)

cada reductor tienen un initialState
las acciones y los reductores se relacionan a través del type y payload */

/* 
//reductores: agarran algo con un determinado estado y ante determinda accion: lo convierten en otro estado
//el estado inicial se puede crear en una variable independiente o directamente (linea 62)
//const reductor = (estado,accion) => estado (actualizado)
const reductor = (estado = 0,accion) => { //condiciones del type con switch
    switch (accion.type) {
        case 'incremento':
            return estado+1
        case 'incremento10':
            return estado+10
        case 'decremento':
            return estado-1
        case 'por5':
            return estado*5
        case 'reseteo':
            return 0
        default:
            return estado
    }
}

//acciones: son ojetos, actuan como eventos
const incrementar = {type:'incremento'}
const incrementar10 = {type:'incremento10'}
const decrementar = {type:'decremento'}
const multiplicar5 = {type:'por5'}
const resetear = {type:'reseteo'}

//store: es un objeto que une las acciones con los estados.
//ademas: guarda los estados de TODA la app y permite leerlos/actualizarlos
const store = createStore(reductor,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //para conectar con la devTool
)

//dispatch: despacho/envio de acciones a los estados.
store.dispatch(incrementar10)

//getState: para ver el estado, es necesario definir el estado inicial (de lo contrario no funciona)
store.getState()

//subscribe detecta cada cambio en el store y ejecuta una funcion
subscribe(() => {
    console.log(store.getState()) //un consoleo
    //renderApp//actualiza el DOM con cada cambio
})
//las siguientes acciones se utilizan en eventos de botones para modificar el contador
store.dispatch(decrementar)
store.dispatch(decrementar)
store.getState(multiplicar5) */