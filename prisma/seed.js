import { PrismaClient } from "@prisma/client";

import { mock } from "./mock.js";

const { users, sessions } = mock;

const prisma = new PrismaClient();

async function main() {
  for (const user of users) {

    const createdUser = await prisma.users.create({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        completedSessions: user.completedSessions,
        remainingSessions: user.remainingSessions,
      },
    });

    const createdSessions = await prisma.sessions.createMany({
      data: user.sessions.map(session => ({
        sessionNumber: session.sessionNumber,
        sessionDate: new Date(session.sessionDate),
        userId: createdUser.id,
      })),
    });
  }

}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
