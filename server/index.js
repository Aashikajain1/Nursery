import express from 'express'

const app = express()
app.use(express.json())


app.get('/health',(req,res)=>{
    console.log(req.method)
    console.log(req.path)
    console.log(req)


    res.send({
        success:true,
        message:"API Ran successfully"
    });
})

app.get('/',(req,res)=>{
    res.send("Hello World");
})

const PORT = 5000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
}) 