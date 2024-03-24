import axios from "axios";

export const api:any = axios.create({
    baseURL: "https://fullstack-rh-system.onrender.com",
    timeout: 15000
})