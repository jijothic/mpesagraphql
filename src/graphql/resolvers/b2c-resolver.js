import Tweet from '../../models/Tweet';
export default {
    createTweet: (_, args) => Tweet.create(args),
    getTweet: (_, {
        _id
    }) => Tweet.findById(_id),
    getTweets: () => Tweet.find({}).sort({
        createdAt: -1
    }),
    updateTweet: (_, {
        _id,
        ... rest
    }) => Tweet.findByIdAndUpdate(_id, rest, {
        new: true
    }),
    deleteTweet: async (_, {
        _id
    }) => {
        try {
            await Tweet.findByIdAndRemove(_id);
            return {
                message: 'Delete Success!'
            }
        } catch (error) {
            throw error;
        }
    }
};