const express= require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

//Graphql Schema

const schema = buildSchema(`
    type Query{
        message: String,
    }
`);

var root = {
    message:() => 'Hello'
}

//Create an express server and Graphql endpoint

const app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3333, ()=> {
    console.log('Express Graphql Server Naw Running On localhost:4000/graphql');
});