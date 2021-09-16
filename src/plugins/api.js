import axios from 'axios'

const baseURL = 'http://localhost:5000'

const apiService = axios.create({
    baseURL
})

export { apiService }