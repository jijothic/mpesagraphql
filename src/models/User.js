import mongoose, {
    Schema
} from 'mongoose';

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
    },
    firstName: String,
    lastName: String,
    avatar: String,
    password: String,
    email: String,
}, {
    timestamps: true
});

export default mongoose.model('User', UserSchema);