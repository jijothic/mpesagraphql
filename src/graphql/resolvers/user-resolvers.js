import User from '../../models/User';

export default {
    signup: (_, {
        fullName,
        username,
        password,
        email,
        avatar
    }) => {
        const [firstName, ...lastName] = fullName.split(' ');
        return User.create({
            firstName,
            lastName,
            username,
            password,
            email,
            avatar
        });
    },
}