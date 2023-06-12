import express from 'express'
import router from './router'
import morgan from 'morgan'
import { protect } from './modules/auth'
import cors from 'cors'
import { createNewUser , signIn} from './handlers/user'
import { sign } from 'crypto'

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.use((req,res,next)=>{
//     req.ssh_secret="dog";
//     next()
// })
app.get('/', (req, res, next) => {
    // setTimeout(() => {
    //   next(new Error('hello'))
    // },1)
    res.json({message:"hello"}) //for test
})
// app.get('/',(req,res)=>{
//     console.log("Hello from express")
//     res.status(200)
//     res.json({message:"Hi!"})
// })

app.use('/api', protect , router) //protect is working as middleware and checking authorization before we go to router
app.post('/user',createNewUser);
app.post('/signin', signIn);

app.use((err, req, res, next) => {
    if(err.type === 'auth'){
        res.status(401).json({message:'unauthorized'})
    }else if (err.type === 'input'){
        res.status(400).json({message:'invalid'})
    }else {
        res.status(500).json({message:'oops, thats on us!'})
    }
  })

export default app;