import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGVhMDdiYzM1NTJhMGUyYjY5NzJmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTUzNDU3OSwiZXhwIjoxNjc1NzkzNzc5fQ.hcSQ7vhJL4JGD11b9E7HL4uEP9vtsMHsDNEq2uZHtIU"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})