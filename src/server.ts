import express from 'express';
import {TestController} from "./controllers/test-controller";
import {UserController} from "./controllers/user-controller";


/** SERVER PARAMETERS **/
const app = express();
const hostname = '0.0.0.0';
const port: number = parseInt(process.env.PORT ||  '8080', 10);


/** ROUTING **/
new TestController().setupRoutes(app);
new UserController().setupRoutes(app);


/** START SERVER **/
app.listen(port, hostname, () => {
    console.log(`Server is listening on http://${hostname}:${port}`)
});
