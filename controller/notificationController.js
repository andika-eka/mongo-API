import Notification from '../models/notification.js'

export const getNotifs = async(req, res) => {
    try {
        const notification = await Notification.find();
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
} 

export const getNotifsID = async(req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const storeNotifs = async(req, res) => {
    const notification = new Notification(req.body);
    try {
        const resave = await notification.save();
        res.status(200).json(resave);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
} 