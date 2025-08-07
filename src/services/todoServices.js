import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos"; 

export const getTodos = async () => {
  try{
  const response = await axios.get(API_URL);
  return response.data;
  }
catch(error){
  console.error("error:",error.message)
  }
};


export const getTodoById = async (id) => {
  try{
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
}catch(error){
  console.error("error:",error.message)
  }
  
};


export const createTodo = async (todo) => {
  try{
  const response = await axios.post(API_URL, todo);
  return response.data;
}catch(error){
  console.error("error:",error.message)
  }
};


export const updateTodo = async (id, updatedTodo) => {
  try{
  const response = await axios.put(`${API_URL}/${id}`, updatedTodo);
  return response.data;
  }catch(error){
  console.error("error:",error.message)
  }
};


export const deleteTodo = async (id) => {
  try{
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
  }catch(error){
  console.error("error:",error.message)
  }
};
