import Tweet from '../../models/Tweet';
import {
    requireAuth
} from '../../services/auth';

export default {
    getTweet: async (_, {
        _id
    }, {
        user
    }) => {
        try {
            await requireAuth(user);
            return B2C.findById(_id);
        } catch (error) {
            throw error;
        }
    },

    getB2Cs: async (_, args, {
        user
    }) => {
        try {
            await requireAuth(user);
            return B2C.find({}).sort({
                createdAt: -1
            });
        } catch (error) {
            throw error;
        }
    },

    createB2C: async (_, args, {
        user
    }) => {
        try {
            await requireAuth(user);
            return B2C.create(args);
        } catch (error) {
            throw error;
        }
    },

    updateB2C: async (_, {
        _id,
        ...rest
    }, {
        user
    }) => {
        try {
            await requireAuth(user);
            return B2C.findByIdAndUpdate(_id, rest, {
                new: true
            });
        } catch (error) {
            throw error;
        }
    },

    deleteB2C: async (_, {
        _id
    }) => {
        try {
            await B2C.findByIdAndRemove(_id);
            return {
                message: 'Delete Success!',
            };
        } catch (error) {
            throw error;
        }
    },
};