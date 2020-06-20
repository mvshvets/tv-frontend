import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://lapkisoft.ru:8080/api',
});

export const API = {
    /** Получить все ОП */
    getEduPrograms: () => instance.get('/ed-programs'),

    /** Получить ОП по ID */
    getEduProgram: (id: string) => instance.get(`/ed-programs/${id}`, { data: { username: 'user', 'password': 'qwe123' } }),

    /** Собрать стороннюю информацию по ОП: */
    getProgramInfo: (id: string) => instance.post(`/ed-programs/${id}/collect_info`)

}