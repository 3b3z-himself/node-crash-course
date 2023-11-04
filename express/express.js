const express = require('express');
const mongoose = require('mongoose');
const packages = require('./models/pricingpackage');
const dbURI = "mongodb+srv://3bzaher:newpass00@cluster0.mun6mwu.mongodb.net/node-tuts?retryWrites=true&w=majority"
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch(err => console.log('Error connecting', err));
app = express();
app.set('view engine', 'ejs');



app.get('/', function(req, res) {
    // res.send('hello world');
    packages.find().sort({ createdAt: -1})
    .then((result) => res.render('packages', {root: __dirname, title: 'Home', Title: "Welcome To Egypt", packages: result}))
    .catch((err) => console.log(err));
    ;
});


app.get('/about', function(req, res) {
    res.render('about', {root: __dirname, title: 'about'});
});

app.get('/package', function(req, res) {
   packages.findById('6545b99b30ce0ff9121a2dff')
    .then((result) => {
        res.send(result)
    })
    .catch((err) => console.error(err));
});

app.get('/package/create', function(req, res) {
    const package = new packages({
        title: 'Giza Package',
        days: [
            {
                Day: 'Tuesday', 
                Activity: 'lorem ipsum dolor'
            },

            {
                Day: 'Saturday', 
                Activity: 'See sunsett..esopdfk'
            },
            {
                Day: 'Monday', 
                Activity: 'Eat OKASpoad'
            }
        ],
        price: 100
    })
    package.save()
        .then((result) => res.send(JSON.stringify(result)))
        .catch((err) => console.error(err));
    });

app.get('/all-packages', (req, res) => {
    packages.find()
        .then((result) => res.send(JSON.stringify(result)))
        .catch((err) => console.error(err));
    })

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
})

