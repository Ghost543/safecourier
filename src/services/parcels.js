import http from './httpServices'
// const baseUrl = "https://safe-courier.herokuapp.com/api/v2" || "http://localhost:3100/api/v2"
export async function getOrders() {
    return await http.get(http.baseUrl+'/parcels/all')
}

export function getUserParcels(id) {
    return http.get(`${http.baseUrl}/users/${id}/parcels`)
}

export function getOrder(id) {
    return http.get(`${http.baseUrl}/parcels/${id}`)
}

export function saveParcel(data) {
    return http.post(http.baseUrl+"/parcels",data)
}
export function cancelOrder(id) {
    return http.put(`${http.baseUrl}/parcels/${id}/cancel`)
}
export function addPickUp(id,data) {
    return http.post(`${http.baseUrl}/parcels/${id}/pick`,data)
}
export function changeDestination(id,data) {
    return http.put(`${http.baseUrl}/parcels/${id}/destination`,data)
}

export function updateParcelStatus(id,data) {
    return http.put(`${http.baseUrl}/parcels/${id}/status`,data)
}

export function updatePresentLocation(id,data) {
    return http.put(`${http.baseUrl}/parcels/${id}/presentLocation`,data)
}

export function getUsers() {
    return http.get(http.baseUrl+"/users/")
}

export function getUser(id) {
    return http.get(`${http.baseUrl}/users/${id}`)
}
