
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

// resolvers
export const resolvers = {
  Query: {
    users: async () => {
      return await prisma.users.findMany({
        include: {
          sessions: true,
        }
      });
    },
    sessions: async () => {
      return await prisma.sessions.findMany();
    },
    user: async (_, args) => {
      return prisma.users.findFirst((user) => user.id === args.id)
    },
  },
  // Users: {
  //   sessions(parent) {
  //     return db.sessions.filter((s) => s.userId === parent.id)
  //   }
  // },
  Mutation: {
    //   deleteUser(_, args) {
    //     db.users = db.users.filter((u) => u.id !== args.id)
    //
    //     return db.users
    //   },
    newUser: async (_, { nUser }) => {
      const { firstName, lastName, email, completedSessions, remainingSessions } = nUser
      // Check for null fields
      if (!firstName || !lastName) {
        throw new Error("Los campos 'firstName' y 'lastName' son obligatorios.");
      }

      // User Fields
      const newUser = {
        firstName,
        lastName,
        email,
        completedSessions: completedSessions || 0,
        remainingSessions: remainingSessions || 0,
      }

      return await prisma.users.create({ data: newUser })
    },
    // updateUser(_, args) {
    //   db.users = db.users.map((usr) => {
    //     if (usr.id === args.id) {
    //       return { ...usr, ...args.edits }
    //     }
    //
    //     return usr
    //   })
    //
    //   return db.users.find((usr) => usr.id === args.id)}
  }
}

//## In case we want to add search through sessions by userId.. see Sessions model and add; "users: [Sessions]
// Sessions: {
//   users(parent) {
//     return db.users.find((usr) => usr.id === parent.userId)
//   }
// }
//##


