import React, { useEffect, useState } from 'react'


import {Video} from './Video';
import * as VideoService from './VideoService';
import VideoItem from './VideoItem'

const VideoList = () => {

    const [videos, setVideos] = useState<Video[]>([])
    
    const loadVideos = async() =>{
        const respuesta= await VideoService.obtenerVideos()
        

        setVideos(respuesta.data);
    }

    useEffect(() => {
        loadVideos()
       
    }, [])


    return (
        <div className="row">
            {videos.map(video => {
                return<VideoItem video={video} key={video._id}/>
            })}
        </div>
    )
}

export default VideoList
