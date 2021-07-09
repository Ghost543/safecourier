import http from '../services/httpServices'

// const urlEndpoint = "https://safe-courier.herokuapp.com/api/v2/auth/login" || "http://localhost:3100/api/v2/auth/login"
const urlEndpoint = http.baseUrl+"/auth/login"

export function login(user) {
    return http.post(urlEndpoint,{
        email: user.email,
        password: user.password
    })
}
