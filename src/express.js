const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

//to print the path details
 console.log(__dirname)
 console.log(__filename)
 //to change path 
console.log(path.join(__dirname,'../public'))

const app=express()
const port=process.env.PORT || 3000

//define paths for express config
const dir=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')

//setup handlebars and view location
app.set('view engine', 'hbs')
app.set('views',viewpath)
hbs.registerPartials(partialpath)

//setup static directory to serve
app.use(express.static(dir))


app.get('', (req, res) => {
    res.render('index1',{
        title:'weather ',
        name:'suraj rayudu'
    })
})

app.get('/help',(req,res)=>{
    
   res.render('help',{
       title:'help',
       name:'suraj'
   })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about',
        name:'bunty'
    })
}) 
/*
app.get('/weather',(req, res)=>{
    if(!req.query.search){
        return res.send({
            error:'you must provide an address'
        })
    }
    console.log(req.query.search)
res.render('weather',{
    
    title:['forecast'],
    temperature:27,
    rainfall:0,
    name:'bsr'
})
}) */
app.get('/weather',(req, res)=>{
    if(!req.query.address){
        return res.send({
            error:'you must provide an address'
        })
    }    
    geocode(req.query.address,(error,{latitude,longitude,location}={}) =>{
        if(error){
        return res.send({error})
        }
        forecast(latitude,longitude,(error,forecastdata)=>{
            if(error){
                return res.send({error})
            }
   console.log(req.query.address)
    res.send({
        forecast:forecastdata,
        location,
        address:req.query.address
    })
})
    })
})
app.get('/products',(req,res)=>{
    if(!req.query.search){
        return  res.send({
    error:'you must provide a search term'
})
    }
    console.log(req.query.search)
    res.send({
        products:[]
    })
})
app.get('/help/*',(req,res)=>{
res.render('error',{
    title:'wrong search',
    name:'suraj',
    errormsg:'article not found'
})
})
app.get('*',(req,res)=>{
res.render('404page',{
    title:'404',
    name:'suraj',
    errormsg:'404 page not found'
})
})
//console.log('hi)
app.listen(port, () => {
    console.log('Server is up on port.'+ port)
})