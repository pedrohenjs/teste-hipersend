import axios from 'axios'

export async function apiPut(data: any) {
    await axios.put('http://localhost:3000/workdays', data, {
        withCredentials: true
    })
}


export async function apiGet(): Promise<any> {
    const response =  await axios.get('http://localhost:3000/workdays', {
        withCredentials: true
    })
    return response
}