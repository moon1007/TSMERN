import * as React from "react";
import axios from "axios";
import { RouteComponentProps, withRouter } from "react-router-dom";

/**
 * Middle Layer with rendering presentation layer (left side of view component)
 */
// Setting up Keys and Values
// It could be declared as 'any' but declared as 'String' as it will JSON file
export interface IKeyValues {
  REF_DATE: string;
  GEO: string;
  DGUID: string;
  Sex: string;
  AgeGroup: string;
  StudentResponse: string;
  UOM: string;
  UOM_ID: string;
  SCALAR_FACTOR: string;
  SCALAR_ID: string;
  VECTOR: string;
  COORDINATE: string;
  VALUE: string;
  STATUS: string;
  SYMBOL: string;
  TERMINATED: string;
  DECIMALS: string;
}

export interface IFormProp {
  [key: string]: any;
  values: IKeyValues[];
  successful: boolean; // Used to verify if AXIOS request is successful
  loading: boolean; // Verify if AXIOS request is loaded
}

/**
 * User will enter data(Client Side) > set properties with entered value > Post entered data to JSON (Server side data)
 *
 */
class CreateRecord extends React.Component<RouteComponentProps, IFormProp> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      REF_DATE: "",
      GEO: "",
      DGUID: "",
      Sex: "",
      AgeGroup: "",
      StudentResponse: "",
      UOM: "",
      UOM_ID: "",
      SCALAR_FACTOR: "",
      SCALAR_ID: "",
      VECTOR: "",
      COORDINATE: "",
      VALUE: "",
      STATUS: "",
      SYMBOL: "",
      TERMINATED: "",
      DECIMALS: "",
      values: [],
      loading: false,
      successful: false
    };
  }

  // When the form submitted it calls postDBEntry and it sets each value for each key then push the post request with mapped values
  private postDbEntry = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.setState({ loading: true });
    const dbEntryProp = {
      REF_DATE: this.state.REF_DATE,
      GEO: this.state.GEO,
      DGUID: this.state.DGUID,
      Sex: this.state.Sex,
      AgeGroup: this.state.AgeGroup,
      StudentResponse: this.state.StudentResponse,
      UOM: this.state.UOM,
      UOM_ID: this.state.UOM_ID,
      SCALAR_FACTOR: this.state.SCALAR_FACTOR,
      SCALAR_ID: this.state.SCALAR_ID,
      VECTOR: this.state.VECTOR,
      COORDINATE: this.state.COORDINATE,
      VALUE: this.state.VALUE,
      STATUS: this.state.STATUS,
      SYMBOL: this.state.SYMBOL,
      TERMINATED: this.state.TERMINATED,
      DECIMALS: this.state.DECIMALS
    };
    this.setState({
      successful: true,
      values: [...this.state.values, dbEntryProp],
      loading: false
    });

    // AXIOS library : request post call
    //https://designrevision.com/react-axios/
    axios.post("http://localhost:5000/student", dbEntryProp).then(data => [
      setTimeout(() => {
        this.setState({ successful: true, loading: false });
        //this.props.history.push("/");
      }, 1500)
    ]);
    console.log("Create");
    console.log(dbEntryProp); // Display entered and pushed value as a new item
  };

  // Will be called whenever the input text value changes to assign the entered value to its key
  private updateState = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault(); // Added to prevent a web browser refresh or reload the page
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  /**
   * Renders 'Add Record' part what users will see on the web app (left side contents)
   * Referred using 'form-group' from Reference : https://appdividend.com/2018/11/11/react-crud-example-mern-stack-tutorial/
   */
  public render() {
    const { successful: submitSuccess, loading } = this.state;
    return (
      <div>
        {submitSuccess && (
          <div className="alert alert-info" role="aler">
            Your entry has been added in the DB!!
          </div>
        )}

        <form id={"create-form"} onSubmit={this.postDbEntry} noValidate={true}>
          <div className="form-group col-md-12">
            <label htmlFor="REF_DATE">REF_DATE</label>
            <input
              type="text"
              id="REF_DATE"
              onChange={e => this.updateState(e)}
              name="REF_DATE"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="GEO">GEO</label>
            <input
              type="text"
              id="GEO"
              onChange={e => this.updateState(e)}
              name="GEO"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="DGUID">DGUID</label>
            <input
              type="text"
              id="DGUID"
              onChange={e => this.updateState(e)}
              name="DGUID"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="Sex">Sex</label>
            <input
              type="text"
              id="Sex"
              onChange={e => this.updateState(e)}
              name="Sex"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="AgeGroup">Age Group</label>
            <input
              type="text"
              id="AgeGroup"
              onChange={e => this.updateState(e)}
              name="AgeGroup"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="StudentResponse">Student Response</label>
            <input
              type="text"
              id="StudentResponse"
              onChange={e => this.updateState(e)}
              name="StudentResponse"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="UOM">UOM</label>
            <input
              type="text"
              id="UOM"
              onChange={e => this.updateState(e)}
              name="UOM"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="UOM_ID">UOM_ID</label>
            <input
              type="text"
              id="UOM_ID"
              onChange={e => this.updateState(e)}
              name="UOM_ID"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="SCALAR_FACTOR">UOM_ID</label>
            <input
              type="text"
              id="SCALAR_FACTOR"
              onChange={e => this.updateState(e)}
              name="SCALAR_FACTOR"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="SCALAR_ID">SCALAR_ID</label>
            <input
              type="text"
              id="SCALAR_ID"
              onChange={e => this.updateState(e)}
              name="SCALAR_ID"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="VECTOR">VECTOR</label>
            <input
              type="text"
              id="VECTOR"
              onChange={e => this.updateState(e)}
              name="VECTOR"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="COORDINATE">COORDINATE</label>
            <input
              type="text"
              id="COORDINATE"
              onChange={e => this.updateState(e)}
              name="COORDINATE"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="VALUE">VALUE</label>
            <input
              type="text"
              id="VALUE"
              onChange={e => this.updateState(e)}
              name="VALUE"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="STATUS">STATUS</label>
            <input
              type="text"
              id="STATUS"
              onChange={e => this.updateState(e)}
              name="STATUS"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="SYMBOL">SYMBOL</label>
            <input
              type="text"
              id="SYMBOL"
              onChange={e => this.updateState(e)}
              name="SYMBOL"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="TERMINATED">TERMINATED</label>
            <input
              type="text"
              id="TERMINATED"
              onChange={e => this.updateState(e)}
              name="TERMINATED"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="DECIMALS">DECIMALS</label>
            <input
              type="text"
              id="DECIMALS"
              onChange={e => this.updateState(e)}
              name="DECIMALS"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-4 pull-right">
            <button className="btn btn-primary" type="submit">
              Save
            </button>
            {loading && <span className="fa fa-circle-o-notch fa-spin" />}
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(CreateRecord);
