
import React, { ChangeEvent, FormEvent, useState, useEffect} from 'react'
import {Video} from './Video'
import * as videoService from './VideoService';
import { toast } from 'react-toastify';
import {useHistory, useParams} from 'react-router-dom';



type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
    id: string;
}
const VideoForm = () => {

    const history = useHistory();
    const params = useParams<Params>();
    console.log(params);

    const initialState={
        titulo: "",
        descripcion: "",
        url: ""
    }
    

    const [video, setVideo] = useState<Video>(initialState)  
          
    const handleInputChange = (e: InputChange) => {
        setVideo({...video, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
       
        if (!params.id) {
            await videoService.crearVideos(video);
            setVideo(initialState);
            toast.success("New Video Added");
          } else {
            await videoService.actualizarVideo(params.id, video);
          }
          history.push("/");


      
    };

   
    const getVideo = async (id: string) => {
        const res = await videoService.obtenerVideo(id);
        const { titulo, descripcion, url } = res.data;
        setVideo({ titulo, descripcion, url });
      };

    useEffect(() => {
        if(params.id) getVideo(params.id);
    }, [params.id])

    


    return (
       <div className="row">
           <div className="col-md-4 offset-md-4">
               <div className="card my-auto">
                   <div className="card-body">
                      <h3>Nuevo Video</h3>
                      <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="titulo" 
                                    placeholder="Título del Video" 
                                    className="form-control"
                                    autoFocus
                                    onChange={handleInputChange}
                                    value={video.titulo}
                                    
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="url" 
                                    placeholder="https://ejemplo.com" 
                                    className="form-control"
                                    onChange={handleInputChange}
                                    value={video.url}
                                    
                                />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    name="descripcion"  
                                    rows={3} 
                                    className="form-control" 
                                    placeholder="Descripción"
                                    onChange={handleInputChange}
                                    value={video.descripcion}
                                >

                                </textarea>
                            </div>
                           
                           {
                               params.id ? (  <button className="btn btn-info">Actualizar Video</button> ) : (   <button className="btn btn-primary">Crear Video</button>  )
                           }                   
                      </form>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default VideoForm
