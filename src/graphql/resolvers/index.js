import GraphQLDate from 'graphql-date';

import TweetResolvers from './tweet-resolvers';
import UserResolvers from './user-resolvers';

export default {
  Date: GraphQLDate,
  Query: {
    getPayment: PaymentResolvers.getPayment,
    getPayments: PaymentResolvers.getPayments,
  },
  Mutation: {
    createPayment: PaymentResolvers.createPayment,
    updatePayment: PaymentResolvers.updatePayment,
    deletePayment: PaymentResolvers.deletePayment,
    signup: UserResolvers.signup,
    login: UserResolvers.login
  }
};