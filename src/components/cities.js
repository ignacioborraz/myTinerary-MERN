import React from 'react' //importo paquetes de react

export default class Cities extends React.Component { //generamos un objeto de clase
    
    constructor(props) { //utilizamos un constructor que va a depender de propiedades
        super(props) //super hace referencia al constructor de la clase base (en este caso un componente de react)
            this.state = { //defino las propiedades de ESTE constructor (ESTADO)
                login: false,
                text: "log in plis!",
            }
    }
    changeToin = () => { //al objeto le definimos un metodo que cambia propiedades
        this.setState({ //seteamos(modificamos/configuramos) ESTE constructor ESTADO
            login: !this.state.login,
            text1: "you are log in!",
            text2: "thanks for log in!"
        })

    }

    render() { //al objeto le definimos un metodo que imprime en HTML
        return ( //returno el HTML
        <div>
            <h1>ESTA ES LA PAGINA DE CIUDADES</h1>
            <h2>y acá voy a poner todas las cards de ciudades</h2>
        </div>
        )
    }
}