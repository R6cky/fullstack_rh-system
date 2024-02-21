import axios from "axios";

export const api:any = axios.create({
    baseURL: "http://localhost:3333",
    timeout: 6000
})