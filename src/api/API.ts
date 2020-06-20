import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://lapkisoft.ru:8080/api',
});

export const API = {
    getEduPrograms: () => instance.get('/ed-programs')
}