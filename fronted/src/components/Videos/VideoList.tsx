import React, { useEffect, useState } from 'react'


import {Video} from './Video';
import * as VideoService from './VideoService';
import VideoItem from './VideoItem'

const VideoList = () => {

    const [videos, setVideos] = useState<Video[]>([])
    
    const loadVideos = async() =>{
        const respuesta= await VideoService.obtenerVideos()

        const formatedVideos = respuesta.data.map(video =>{
            return{
                ...video,
                //se convierte las fechas(string) a formato fecha
                createdAt: video.createdAt ? new Date(video.createdAt): new Date(),
                updatedAt: video.updatedAt ? new Date(video.updatedAt): new Date()
            }
        })
        //ordena los videos de fecha reciente a la primera
        .sort((elementoanterior, elementoiguiente) => elementoiguiente.createdAt.getTime()-elementoanterior.createdAt.getTime());
        setVideos(formatedVideos);
    }

    useEffect(() => {
        loadVideos()
       
    }, [])


    return (
        <div className="row">
            {videos.map(video => {
                return<VideoItem video={video} key={video._id} loadVideos={loadVideos}/>
            })}
        </div>
    )
}

export default VideoList
