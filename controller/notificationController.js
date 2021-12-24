import Notification from '../models/notification.js'


//index
export const getNotifs = async(req, res) => {
    try {
        const notification = await Notification.find();
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
} 

//show
export const getNotifsID = async(req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//store
export const storeNotifs = async(req, res) => {
    const notification = new Notification(req.body);
    try {
        const ressave = await notification.save();
        res.status(200).json(ressave);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//update
export const updateNotifs = async(req, res) => {
    var notification = await Notification.findById(req.params.id);
    if  (!notification) return res.status(404).json({status : false, message:"data not found"});
    try {
        const ressave = await Notification.updateOne({_id:req.params.id}, {$set:req.body});
        res.status(200).json(ressave);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//delete
export const deleteNotifs = async(req, res) => {
    var notification = await Notification.findById(req.params.id);
    if  (!notification) return res.status(404).json({status : false, message:"data not found"});
    try {
        const resdel = await Notification.deleteOne({_id:req.params.id});
        res.status(200).json(resdel);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
} 