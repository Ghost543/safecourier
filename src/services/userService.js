import http from '../services/httpServices'

// const urlEndpoint = "https://safe-courier.herokuapp.com/api/v2/auth/signup" || "http://localhost:3100/api/v2/auth/signup"

const urlEndpoint = http.baseUrl+"/auth/signup"

export function signup(user) {
    return http.post(urlEndpoint,{
        name: user.fullname,
        email: user.email,
        telephoneNumber: user.telephone,
        password: user.password
    })
}
