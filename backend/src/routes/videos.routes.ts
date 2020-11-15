import {Router} from 'express'

const router = Router();

import * as videoController from './videos.controller'

router.post('/videos', videoController.crearVideos);

router.get('/videos', videoController.obtenerVideos);

router.get('/videos/:id', videoController.obtenerVideo);

router.delete('/videos/:id', videoController.borrarVideo);

router.put('/videos/:id', videoController.actualizarVideo);

export default router;