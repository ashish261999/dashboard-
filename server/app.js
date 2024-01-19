const express = require('express')
const cors = require('cors');
const jobRoutes = require('./routers/jobs_routes');
// const userRoutes = require('./routers/user_routes');
require("./connect/connect");


const app = express()
const port = 8080
app.use(cors(
  {
    origin:[" https://dashboard-3-vert.vercel.app"],
    methods: ["POST" ,"GET"],
    credentials:true
  }
));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
    

app.use('/jobs', jobRoutes);
// app.use('/users', userRoutes);



app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})