const express=require('express');
const cors= require('cors');

const db= require('./shared/db.connect');

const userRoutes = require('./routes/users.route');
const contactRoutes= require('./routes/contacts.route');
const leadRoutes= require('./routes/leads.route');
const serviceRequestsRoutes= require('./routes/servicerequests.route');

const app= express();

//IIFE to connect to db and setup middlewares needed
(async()=>{
    try{
        //Db connection
        await db.connect();

        app.use(cors({
            origin:['http://localhost:3000','https://siva-react-crm.netlify.app']
           }));

        //Middleware to parse data into JSON
        app.use(express.json());

        app.use('/users',userRoutes);
        app.use('/contacts',contactRoutes);
        app.use('/leads',leadRoutes);
        app.use('/requests',serviceRequestsRoutes);

        app.listen(process.env.PORT||3001);
        console.log('Started and running');
    } catch(err){
        console.log(`Error starting servver ${err}`);
    }
})();