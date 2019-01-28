type User {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  },
  type Mutation {
    createPayment(text: String!): Payment
    updatePayment(_id: ID!, text: String): Payment
    deletePayment(_id: ID!): Status
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): User
    login(email: String!, password: String!): User
  }