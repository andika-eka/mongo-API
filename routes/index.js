import express from 'express'
import { getNotifs, getNotifsID, storeNotifs } from '../controller/notificationController.js'

const router = express.Router()

router.get('/', getNotifs)          //get all
router.get('/:id', getNotifsID)     //get by ID
router.post('/', storeNotifs)       //store 


export default router;