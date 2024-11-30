import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { PrismaClient } from '@prisma/client';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ prisma }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};
const nextHandler = startServerAndCreateNextHandler(server);

export const GET = nextHandler;
export const POST = nextHandler;
// export default apolloServer.createHandler({ path: '/api/graphql' });
