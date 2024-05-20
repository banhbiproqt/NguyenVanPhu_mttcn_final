import express from 'express'
const app = express()
const router = express.Router()
const port = 2800

app.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/tweets',(req,res)=>{
  res.json({
    data: [
      {
        id:1,
        text:'Hello Phu'
      }
    ]
  })
})
app.use('/api',router) 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})