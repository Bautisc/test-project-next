
export const typeDefs = `#graphql

  type Users {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    # age: Int!
    # bornIn: String!
    completedSessions: Int            # number of completed sessions by the user
    remainingSessions: Int            # remaining sessions.
    sessions: [Sessions!]              # list of sessions by the user, each user will have from 1/5 individual sessions
}

  type Sessions {                      # 
    id: ID!
    sessionNumber: Int!
    sessionDate: String
    userId: ID!
}

  type Query {
    users: [Users]                     # Fetch all users
    user(id: ID!): Users               # Fetch single user
    sessions: [Sessions]               # Fetch all sessions
    session(id: ID!): Sessions         # Fetch single session
}
  type Mutation {
    newUser(nUser: NewUserInput!): Users
    updateUser(id: ID!, edits: EditUserInput!): Users
    deleteUser(id: ID!): [Users]
}

  input NewUserInput {
    firstName: String!
    lastName: String!
    email: String!
    completedSessions: Int
    remainingSessions: Int
  }
  input EditUserInput {
    firstName: String
    lastName: String
    email: String
    completedSessions: Int
    remainingSessions: Int
  }
` 
