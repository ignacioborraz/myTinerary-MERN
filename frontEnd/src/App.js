//importo de librerias externas
import React, {useEffect}from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

//importo los estilos
import './styles/styles.css'

//importo las páginas que se van a renderizar
import Home from './pages/Home'
import Cities from './pages/cities'
import CityDetail from './pages/cityDetail'
import LogIn from './pages/login'
import SignUp from './pages/signup'
import MyCarousel from './pages/carousel'
import Welcome from './pages/welcome'

//importo componentes locales
import MySnackBar from './components/snackBar'

//importo acciones de redux
import {connect} from 'react-redux'
import userActions from './redux/actions/userActions'

function App(props) {
    useEffect(() => {
        if(localStorage.getItem('token')!== null) {
            const token = localStorage.getItem("token")
            props.verifyToken(token)
        }
    },[])
    return (
        <BrowserRouter> {/* buscador de rutas */}
            <Routes> 
                <Route path="/cities" element={<Cities />} /> {/* en path se coloca la ruta del archivo que se busca */}
                <Route path ="/cities/:id" element={<CityDetail />}/> v
                <Route path='/signup' element={<SignUp  />} />
                {props.user ? <Route path='/login' element={<MyCarousel />} /> : <Route path='/login' element={<LogIn />} />}
                <Route path='/signout' element={<Home  />} />
                <Route path='/welcome' element={<Welcome  />} />
                <Route path="/*" index element={<Home />} />
            </Routes>
            <MySnackBar />
        </BrowserRouter>
    )
}

const mapDispatchToProps = {
	verifyToken: userActions.verifyToken,
}

const mapStateToProps = (state) => {
    return {
      user: state.userReducer.user
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)