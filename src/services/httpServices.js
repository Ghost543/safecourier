import axios from 'axios'
import {toast} from 'react-toastify'

axios.defaults.headers.common['x-auth-token'] = localStorage.getItem("token")
axios.interceptors.response.use(null,error=>{
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500

    if (!expectedError) {
        console.error(error)
        toast.error("An Unexpected error occurred")
    }
    return Promise.reject(error)
})
// "https://safe-courier.herokuapp.com/api/v2/" || "http://localhost:3100/api/v2"
const http = {
    baseUrl: "https://safe-courier.herokuapp.com/api/v2",
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}
export default http