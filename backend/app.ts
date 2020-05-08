import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/studentRoutes";
import * as mongoose from "mongoose";
import * as cors from "cors";

/**
 * Initialize data connection to MongoDB and localhost
 */
class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  public uri: string = "mongodb+srv://<id:password>@cluster0"; // MondoDB connection URI
  //public mongoUrl: string = "mongodb://localhost/studentdb"; -> can be connected to local server
  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.dbsetup();
  }
  private dbsetup(): void {
    //mongoose.Promise = global.Promise; // always returns primise
    mongoose.connect(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    let connectionStatus = mongoose.connection;
    connectionStatus.once("open", () => {
      console.log("MongoDB is successfully established!!!"); // check if mongoDB server is up
    });
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json()); // support json type data
    this.app.use(bodyParser.urlencoded({ extended: false })); // support x-www-form data
  }
}

export default new App().app;
