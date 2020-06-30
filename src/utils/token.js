import decode from 'jwt-decode'

export function login(token){

    window.localStorage.setItem('token', token)
}

export function isLogged(){

    const token = window.localStorage.getItem('token');

    return token && decode(token).exp > (Date.now() / 1000)
}

export function logout(){

    window.localStorage.removeItem('token')
}