import config from 'config';
import mongoose from 'mongoose';

console.log(process.env.NODE_ENV);

let env = process.env.NODE_ENV === 'development' 
    ? 'dev' : (process.env.NODE_ENV === 'production') ? 'prod' : '';

let username    = config.get('database.user');
let password    = config.get('database.password');
let url         = config.get('database.url');
let host        = config.get('Customer.dbConfig');

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