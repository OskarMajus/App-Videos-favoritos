  //este archivo guarda todas las peticiones o funciones que piden al backend
  import axios from 'axios';
import { Video } from './Video';

const API = 'http://localhost:4000/videos';

  export const obtenerVideos = async () =>{
    return await  axios.get(`${API}`)
    
  }

  export const crearVideos = async (video:Video) => {
    return await axios.post(`${API}`, video)
  }