
const express = require('express')

const app = express()

const port = 3000 

const middleware = (req, res, next) => {
    var date = new Date();
    var day = date.getDay()
    var hour = date.getHours()
    if (day == 6 || day == 7) res.send('<h1>Services are not avaible weekends. Please come Monday to Friday, 8 AM to 5 PM. </h1>')
    else if (hour<9 || hour > 17) res.send('<h1>Services are not avaible weekends. Please come Monday to Friday, 8 AM to 5 PM. </h1>')
    next(); 
}
app.use(middleware)

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
    
})

app.get('/ourservices', (req, res) => {
    res.sendFile(__dirname +'/public/ourservices.html')
})

app.get('/Contact', (req, res) => {
    res.sendFile(__dirname+'/public/contact.html')
})
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname+'/public/style.css')
})


app.listen(port, () => console.log(`Server running on ${port}`))


