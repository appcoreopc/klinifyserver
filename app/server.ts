import express, { Request, Response }  from 'express';
import { PhotoController } from './controllers/photo.controller';

import * as bodyParser from "body-parser";
// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({     
    extended: true
  })); 

// test service alive //
app.get('/', async (req: Request, res: Response) => { 
    let current = new Date();
    res.send("hello...." + current.getTime());
});

app.use('/photo', PhotoController);

// Serve the application at the given port
app.listen(process.env.PORT||3000, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
