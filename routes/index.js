import express from 'express'
import { 
    getNotifs, 
    getNotifsID, 
    storeNotifs,
    updateNotifs,
    deleteNotifs
} from '../controller/notificationController.js'

const router = express.Router()

router.get('/notif/', getNotifs)              //get all
router.get('/notif/:id', getNotifsID)         //get by ID
router.post('/notif/', storeNotifs)           //store 
router.patch('/notif/:id', updateNotifs)      //update by ID
router.delete('/notif/:id', deleteNotifs)     //delete by ID


export default router;