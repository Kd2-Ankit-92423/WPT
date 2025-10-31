import axios from 'axios';
import { BASE_URL } from './config';

export async function saveUser(user) {
    const url = BASE_URL + '/user/signup';
    const response = await axios.post(url, user);
    if (response.status === 200) {
        const resp = response.data;
        if (resp?.status === 'success') {
            return resp.data;
        } else {
            throw new Error(resp?.error || 'Failed to save user');
        }
    } else {
        throw new Error(response.statusText || 'Failed to save user');
    }
}

export async function getUserByCredentials(cred) {
    const url = BASE_URL + '/user/signin';
    const token = sessionStorage.getItem('token');
    const response = await axios.post(url, cred, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if (response.status === 200) {
        const resp = response.data;
        if (resp?.status === 'success') {
            return resp.data;
        } else {
            throw new Error(resp?.error || 'Failed to get user');
        }
    } else {
        throw new Error(response.statusText || 'Failed to get user');
    }
}
