import Mongoose from "mongoose";


const Notification = Mongoose.Schema({
    reqId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    UserId: {
        type: String,
    },
    file: {
        type: String,
    },
}, {
    timestamps: true,
})
export default Mongoose.model("Notifications", Notification)