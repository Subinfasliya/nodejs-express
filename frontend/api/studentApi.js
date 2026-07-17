import axios from "axios"

const studentApi = axios.create({
    baseURL : `${import.meta.env.VITE_API_URL}/students`
})

export default studentApi