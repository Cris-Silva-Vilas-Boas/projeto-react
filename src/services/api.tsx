import axios, {AxiosResponse} from 'axios';

export interface IDragonsProps{
    name: string;
    type: string;
    id: string;
    createdAt: string;
}

export const api = axios.create({
    baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io'
})

const responseBody = (response: AxiosResponse) => response.data;

export const Requests = {
    get: (url: string) => api.get<IDragonsProps>(url).then(responseBody),
    delete: (url: string) => api.delete<IDragonsProps>(url).then(responseBody),
    post: (url: string, body: IDragonsProps) => api.post<IDragonsProps>(url, body).then(responseBody),
    put: (url: string, body: IDragonsProps) => api.put<IDragonsProps>(url, body).then(responseBody),
};

export const Dragons = {
    getAllDragons: () : Promise<IDragonsProps[]> => Requests.get(`/api/v1/dragon`),
    deleteDragon: (id : string) : Promise<IDragonsProps> => Requests.delete(`api/v1/dragon/${id}`),
    createDragon : (dragon : IDragonsProps) : Promise<IDragonsProps> => Requests.post(`api/v1/dragon`, dragon),
    getIdDragon : (id : string) : Promise<IDragonsProps> => Requests.get(`api/v1/dragon/${id}`),
    alterDragon : (id : string, dragon : IDragonsProps) : Promise<IDragonsProps> => Requests.put(`api/v1/dragon/${id}`, dragon),
}