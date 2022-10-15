const express = require('express');
const app = express();
const data = require('../portfolio/data.json')


app.use('/static', express.static('public'));

app.set('view engine' , 'pug');

const mainRoutes = require('./routes');
const projectsRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/projects', projectsRoutes);

// app.use((req, res, next) =>{
//     const err = new Error('Oh noes!');
//     err.status = 404;
//     next(err);
// });

// app.use((err, req, res, next) => {
//     res.locals.error = err;
//     res.status(err.status);
//     res.render('error');
// });

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});