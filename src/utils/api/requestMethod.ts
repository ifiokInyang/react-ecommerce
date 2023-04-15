import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})