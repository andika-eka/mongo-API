import express from 'express'
import {
    getNotifs,
    getNotifsID,
    storeNotifs,
    updateNotifs,
    deleteNotifs,
    getNotifsByUser,
    getNotifsBySearch,
    getNotifsToday
} from '../controller/notificationController.js'

const router = express.Router()

router.get('/notif/', getNotifs) //get all
router.get('/notif/id/:id', getNotifsID) //get by ID
router.post('/notif/', storeNotifs) //store 
router.patch('/notif/:id', updateNotifs) //update by ID
router.delete('/notif/:id', deleteNotifs) //delete by ID


router.get('/notif/user/:userID', getNotifsByUser) //get by user
router.get('/notif/search/:search', getNotifsBySearch) //search by name and description
router.get('/notif/today', getNotifsToday) //search by name and description

export default router;