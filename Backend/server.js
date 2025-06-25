import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import adminRouter from "./routes/adminRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import userRouter from "./routes/userRoute.js"



// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB();
connectCloudinary();


// MiddleWares
app.use(express.json())

//app.use(cors())

const allowedOrigins = [
  'https://doc-hub-sigma-umber.vercel.app',
  'https://doc-hub-robq.vercel.app'
];

// ✅ Dynamically allow multiple origins
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));




// API Endpoints

app.use('/api/admin', adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)
app.get('/',(req,res)=>{
    res.send('API Working Great')
})

app.listen(port, ()=> console.log("Server Started", port)
)




