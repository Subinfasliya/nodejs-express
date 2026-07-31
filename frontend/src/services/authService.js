import authApi from "../api/authApi";

export const userLogin = (payload) => authApi.post('/login', payload)