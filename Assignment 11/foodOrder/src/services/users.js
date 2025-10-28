
import { BASE_URL } from './config';
import axios from 'axios'

export async function userSave({name, email, password, confirmPassword, mobile}) {
    const url = BASE_URL + "/users"
    const response = await axios.post(url, {name, email, password, confirmPassword, mobile})
    // if registration is success, return user object (data)
    const resp = response.data
    if(resp?.status === 'success')
        return resp.data
    throw new Error(resp?.error)
}



export async function findUserByCredentials({email, passwd}) {
    const url = BASE_URL + "/users/authenticate"
    const response = await axios.post(url, {email, passwd})
    // if login is success, return user object (data)
    const resp = response.data
    if(resp?.status === 'success')
        return resp.data
    throw new Error(resp?.error)
}

export async function changePassword(newPassword) {
    const url = BASE_URL + "/users/password"
    const token = sessionStorage.getItem("token")
    const response = await axios.patch(url, {password: newPassword}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    // if success, return resp
    const resp = response.data
    if(resp?.status === 'success')
        return resp.data
    throw new Error(resp?.error)
}

