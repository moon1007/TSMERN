import * as React from "react";
import "./App.css";
import {
  Route,
  withRouter,
  RouteComponentProps,
  Switch
} from "react-router-dom";
import ReadRecord from "./components/ReadRecord";
import CreateRecord from "./components/CreateRecord";
import EditRecord from "./components/EditRecord";

/**
 * Presentation Layer
 * A glance look of the web app
 * view components
 * (Top - <h1>)
 * (Left - <h2> Add Record </h2> - CreateRecord (Add Record From))
 * (Right - <h2> List </h2> - ReadRecord (List table))
 *
 *  */
class App extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <div className="container">
        <h1>Report Generator</h1>
        <div className="row">
          <div className="col-sm">
            <h2>Record Entry</h2>
            <Switch>
              <Route path={"/"} exact component={CreateRecord} />
              <Route path={"/:id"} exact component={EditRecord} />
            </Switch>
          </div>
          <div className="col-sm">
            <h2>List</h2>
            <Switch>
              <Route path={"/"} exact component={ReadRecord} />
              <Route path={"/:id"} exact component={ReadRecord} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
