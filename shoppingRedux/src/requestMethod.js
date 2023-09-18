import axios from "axios";


const BASE_URL = "http://localhost:8000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDc0NjRmOGZmNWFkMWIwOTI0ZmNkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NTA0MTYxNSwiZXhwIjoxNjk1MzAwODE1fQ.HsuFFkq1nl-itL_EFCE_A1MA0kBU9LYhh6efONEPxQs";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});