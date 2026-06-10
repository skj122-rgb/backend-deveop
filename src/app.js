import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({                         //middleware that ensure that server mentioned in .env file could only communicate
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({    //middleware that parse json data only upto 16 kb
    limit:"16kb"
}))
/*  URL-encoded data is the format browsers use when you submit an HTML form with method="POST" and enctype="application/x-www-form-urlencoded".
express.urlencoded() converts that string into a JavaScript object stored in req.body.  */
app.use(express.urlencoded({         
    extended:true,limit:"16kb"                                                                                                      
}))
app.use(express.static("public"))   //transform static files in css or html in json format
app.use(cookieParser())


//routes import
import userRouter from './rotes/user.routes.js'

//routes decleration
app.use("/api/v1/users",userRouter)
export { app }