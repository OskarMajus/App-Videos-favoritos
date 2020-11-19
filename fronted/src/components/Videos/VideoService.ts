  //este archivo guarda todas las peticiones o funciones que piden al backend
  import axios from 'axios';
import { Video } from './Video';

const API = 'http://localhost:4000/videos';

  export const obtenerVideos = async () =>{
    return await  axios.get<Video[]>(`${API}`)
    
  }

  export const crearVideos = async (video:Video) => {
    return await axios.post(`${API}`, video)
  }

  export const obtenerVideo = async (id:string) =>{
    return await  axios.get<Video>(`${API}/${id}`)
    
  }

  export const actualizarVideo = async (id:string, video: Video) =>{
    return await  axios.put<Video>(`${API}/${id}`, video)
    
  }

  export const borrarVideo = async (id:string) =>{
    return await  axios.delete<Video>(`${API}/${id}`)
    
  }


