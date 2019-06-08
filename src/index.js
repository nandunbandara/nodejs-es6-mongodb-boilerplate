import express from 'express';
import middleware from './middleware';
import routes from './routes';

const app =  express();

middleware(app);
routes(app);

const PORT = process.env.PORT | 7001;

// Start service
app.on('dbConnected', () =>{
    app.listen(PORT, err => {
        if(err) {
            return console.log(`ERROR: Could not start application on port ${PORT}. ${err}`);
        }
    
        console.log(`SUCCESS: Application running on port ${PORT}`);
        app.emit('ready');
    });   
})

module.exports = app;