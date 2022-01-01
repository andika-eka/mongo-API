import Notification from '../models/notification.js'


//index
export const getNotifs = async (req, res) => {
    try {
        const notification = await Notification.find();
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

//show
export const getNotifsID = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

//store
export const storeNotifs = async (req, res) => {
    const notification = new Notification(req.body);
    try {
        const ressave = await notification.save();
        res.status(200).json(ressave);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

//update
export const updateNotifs = async (req, res) => {
    var notification = await Notification.findById(req.params.id);
    if (!notification) return res.status(404).json({
        status: false,
        message: "data not found"
    });
    try {
        const ressave = await Notification.updateOne({
            _id: req.params.id
        }, {
            $set: req.body
        });
        res.status(200).json(ressave);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

//delete
export const deleteNotifs = async (req, res) => {
    var notification = await Notification.findById(req.params.id);
    if (!notification) return res.status(404).json({
        status: false,
        message: "data not found"
    });
    try {
        const resdel = await Notification.deleteOne({
            _id: req.params.id
        });
        res.status(200).json(resdel);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

//NON CRUD >>>

//search by user id
export const getNotifsByUser = async (req, res) => {
    try {
        const notification = await Notification.find({
            UserId: req.params.userID
        }).exec();
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const getNotifsByCategory = async (req, res) => {
    try {
        const notification = await Notification.find({
            category: req.params.category
        }).exec();
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

//search by name or description
export const getNotifsBySearch = async (req, res) => {
    try {
        const notification = await Notification.find().or([{
                title: {
                    $regex: new RegExp('.*' + req.params.search + '.*', 'i')
                }
            },
            {
                description: {
                    $regex: new RegExp('.*' + req.params.search + '.*', 'i')
                }
            },
            {
                category: {
                    $regex: new RegExp('.*' + req.params.search + '.*', 'i')
                }
            }
        ]).exec();
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

//get all craeated and updated today
export const getNotifsToday = async (req, res) => {
    var start = new Date();
    start.setHours(0, 0, 0, 0);

    var end = new Date();
    end.setHours(23, 59, 59, 999);
    try {
        const notification = await Notification.find().or([{
                createdAt: {
                    $gte: start,
                    $lt: end
                }
            },
            {
                updatedAt: {
                    $gte: start,
                    $lt: end
                }
            }
        ]).exec();
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}