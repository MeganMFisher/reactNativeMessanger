import axios from 'axios';

export function getMessages() {
    return axios.get('/api/messages').then(res => res.data)
}
