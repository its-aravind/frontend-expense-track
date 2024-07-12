import axios from "axios";


export const axiosClient = axios.create({
    baseURL : 'https://backend-expense-track.onrender.com'
})
