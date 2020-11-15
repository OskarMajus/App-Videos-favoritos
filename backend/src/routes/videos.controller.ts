//aquí van las funciones para manipular datos en la base de datos
import {RequestHandler} from 'express'
import Video from './Video'

export const crearVideos : RequestHandler =  async (req,res)=> {
  const videoEncontrado = await Video.findOne({url: req.body.url})
  if(videoEncontrado)
    return res.status(301).json({message: 'La url ya existe'})


  const videos =  new Video(req.body)
  const videoGuardado = await videos.save() 
   res.json(videoGuardado)
}

export const obtenerVideos : RequestHandler = async(req,res)=> {
    try {
        const videos = await Video.find()
        return res.json(videos);
    } catch (error) {
        res.json(error)
    }
    
}

export const obtenerVideo : RequestHandler = async(req,res)=> {
  const videoEcontrado = await Video.findById(req.params.id)
   if(!videoEcontrado) return res.status(204).json()
   return res.json(videoEcontrado);
}

export const borrarVideo : RequestHandler = async(req,res)=> {
    const videoEcontrado = await Video.findByIdAndDelete(req.params.id)
   if(!videoEcontrado) return res.status(204).json()
   return res.json(videoEcontrado);
}

export const actualizarVideo : RequestHandler = async(req,res)=> {
    const videoActualizado = await Video.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if(!videoActualizado) return res.status(204).json()

    res.json(videoActualizado);
} 