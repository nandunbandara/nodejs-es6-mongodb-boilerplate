'use strict';

import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression'

import { connect } from './database';

import swaggerUi from 'swagger-ui-express';
import doc from '../docs/swagger.json';

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';

export default app => {

    app.use(cors());
    app.use(bodyParser.json());

    app.use('/docs', swaggerUi.serve, swaggerUi.setup(doc));

    connect(app);
    
    if(isDev){
        app.use(morgan('dev'));
    }

    if(isProd){
        app.use(compression());
        app.use(helmet());
    }

}