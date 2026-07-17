import studentApi from "../api/studentApi";

export const getStudents = ()=> studentApi.get('/')
export const createStudent = (student)=> studentApi.post('/',student)
export const updateStudent = ()=> studentApi.put('/')
export const deleteStudent = (id)=> studentApi.delete(`/${id}`)
