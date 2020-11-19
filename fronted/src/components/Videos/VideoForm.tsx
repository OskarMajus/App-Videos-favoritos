
import React, { ChangeEvent, FormEvent, useState, useEffect} from 'react'
import {Video} from './Video'
import * as videoService from './VideoService';
import { toast } from 'react-toastify';
import {useHistory, useParams} from 'react-router-dom';



type InputChane = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

interface  Params {
    id?: string;
}

const VideoForm = () => {

    const history = useHistory();
    const params = useParams<Params>();
    

    const [video, setVideo] = useState<Video>({titulo:"", url:"", descripcion:""})
    
    const getVideo= async (id:string)=>{
        const respuesta = await videoService.obtenerVideo(id);
        const {titulo, descripcion, url}= respuesta.data;
        setVideo({titulo, url, descripcion})
    }

    useEffect(() => {
        if (params.id) getVideo(params.id);
      }, [params.id]);
    
    
    const handleInputChange = (e: InputChane) => {
        setVideo({...video, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if (!params.id) {
            await videoService.crearVideos(video);
            toast.success('Nuevo video agregado')
        }else{
            await videoService.actualizarVideo(params.id, video);
        }

        history.push('/')
    };

    


    return (
       <div className="row">
           <div className="col-md-4 offset-md-4">
               <div className="card">
                   <div className="card-body">
                      <h3>Nuevo Video</h3>
                      <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="titulo" 
                                    placeholder="Título del Video" 
                                    className="form-control"
                                    onChange={handleInputChange}
                                    autoFocus
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="url" 
                                    placeholder="https://ejemplo.com" 
                                    className="form-control"
                                    onChange={handleInputChange}
                                    
                                />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    name="descripcion"  
                                    rows={3} 
                                    className="form-control" 
                                    placeholder="Descripción"
                                    onChange={handleInputChange}
                                >

                                </textarea>
                            </div>
                            {
                                params.id ? 
                                <button className="btn btn-info" >Actualizar Vídeo</button>
                                :
                                <button className="btn btn-primary" >Crear Vídeo</button>
                            }

                      </form>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default VideoForm
