import express from 'express' ; 
import * as dotenv from 'dotenv' ; 
import cors from 'cors' ; 
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js' ; 
import dalleRoutes from './routes/dalleRoutes.js'

const app =express() ; 
 //import ('dotenv').config() from {'/server/'} ; 
 dotenv.config();
app.use(cors())
app.use(express.json({limit:'50mb'}))
 ; 

app.use('/api/v1/post' , postRoutes)
app.use('/api/v1/dalle' , dalleRoutes)
 

app.get('/' ,async(req ,res)=>{
    res.send('Welcome to Pixellnovate')
})

const startServer = async () =>{
    try{
        connectDB(process.env.MONGODB_URL) 
    }catch(error){
        console.log(err) ;
    }
    app.listen(8080,()=>{
        console.log('Server started on https://localhost:8080')
        //was storing .env variables as  : instead of =
        console.log(process.env.MONGODB_URL) ; 
    }) ; 

}

 
startServer();
