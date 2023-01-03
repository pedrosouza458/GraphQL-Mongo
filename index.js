const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose')

const MONGODB = "mongodb+srv://admin:1234@graphql-recipes.xk93wl8.mongodb.net/?retryWrites=true&w=majority"

// Apollo Server
// typeDefs: GraphQL Type Definitions
// resolvers: How do we resolve queries / mutations

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.set("strictQuery", true);

mongoose.connect(MONGODB, {useNewUrlParser: true})
   .then(() => {
      console.log("MongoDB Connection sucessful");
      return server.listen({port: 5020})
   })
   .then((res) => {
    console.log(`Server running at ${res.url}`)
   })