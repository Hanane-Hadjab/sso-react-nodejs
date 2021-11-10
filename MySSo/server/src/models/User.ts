import mongoose from 'mongoose';

const user = new mongoose.Schema({
    fullName: {
        type: String,
        allowNull: true
    },
    email: {
        type: String,
        unique: true
    },
    googleId: {
        type: String,
        unique: true,
        allowNull: true
    }
})

export default mongoose.model('User', user);