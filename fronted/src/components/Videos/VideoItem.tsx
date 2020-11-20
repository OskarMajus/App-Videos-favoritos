import React from 'react'
import { Video } from './Video'
import ReactPlayer from 'react-player';
import {useHistory} from 'react-router-dom';
import * as videoService from './VideoService';

import './VideoItem.css'

interface Props{
    video: Video;
    loadVideos: () => void;
}


const VideoItem = ({video, loadVideos}:Props) => {

    const history = useHistory();

    const handleDelete = async (id: string)=>{
        await videoService.borrarVideo(id);
        loadVideos();
    }
   
    return (
        <div className="col-md-4">
            <div className="card card-body video-card animate__animated animate__backInUp " 
                style={{cursor:'pointer'}} 
                //onClick={()=> history.push(`/update/${video._id}`)}
            >
                <div className="d-flex justify-content-between">
                    {/* <h1 onClick={()=>history.push(`/update/${video._id}`)}>{video.titulo}</h1> */}
                    <h3 onClick={()=>history.push(`/update/${video._id}`)}>{video.titulo}</h3>
                    <span className="text-danger" onClick={()=> video._id && handleDelete(video._id)}>
                        X
                    </span>
                </div>
                <p>{video.descripcion}</p>
                <div className="embed-responsive embed-responsive-16by9">
                    <ReactPlayer url={video.url}/>
                </div>
               
            </div>
        </div>
    )
}

export default VideoItem
