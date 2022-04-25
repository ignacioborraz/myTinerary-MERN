import axios from 'axios'

let urlMyTin = 'https://mytinerary-borraz.herokuapp.com/'
//let urlMyTin ='http://localhost:4000/'

const userActions = {
    signUpUser: (userData) => {
        //console.log(userData)
        return async (dispatch, getState) => {
            const res = await axios.post(urlMyTin+'api/auth/signUp', {userData})
            //console.log(res)
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
        }
    },
    logInUser: (userLogin) => {
        //console.log(userLogin)
        return async (dispatch, getState) => {
            const res = await axios.post(urlMyTin+'api/auth/logIn', {userLogin})
            //console.log(res)
            if(res.data.success) {
                localStorage.setItem('token',res.data.response.token)
                dispatch({
                    type: 'user',
                    payload: res.data.response.userData
                })
            } else {
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            }
        } 
    },
    signOutUser: (closeData) => {
        //console.log(closeData)
        return async (dispatch, getState) => {
            const res = axios.post(urlMyTin+'api/auth/signOut',{closeData})
            //console.log(res)
            localStorage.removeItem('token')
            dispatch({
                type: 'user',
                payload: null
            })
        }   
    },
    verifyToken: (token) => {
        return async (dispatch, getState) => {
            //console.log(token)
            const user = await axios.get(urlMyTin+'api/auth/loginToken', {headers: {'Authorization': 'Bearer '+token}} )
            //console.log(user)
            if (user.data.success) {
                dispatch({
                    type: 'user',
                    payload: user.data.response
                })
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success
                    }
                })
            } else {
                localStorage.removeItem('token')
            }
        }
    }
}

export default userActions