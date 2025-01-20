import app from './app'


const PORT : string | undefined = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server is running in port ${PORT}`)
})