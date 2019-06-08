import config from '../config/database.json';
import mongoose from 'mongoose';

console.log(process.env.NODE_ENV);

let env = process.env.NODE_ENV === 'development' 
    ? 'dev' : (process.env.NODE_ENV === 'production') ? 'prod' : '';

let username    = config[env].user;
let password    = config[env].password;
let url         = config[env].url;
let host        = config[env].host;

if(env === 'prod'){
    url = url.replace('<PASSWORD>', password);
}

export function connect(app) {

    return mongoose.connect(url).then(() => {
                console.log(`SUCCESS: Connected to database on ${host}`);
                app.emit('dbConnected');
            }
        ).catch( err => {
            console.log(`
                ERROR: occured when connecting to ${host}
                ERROR: ${err.message}
            `);
        });

};