import * as React from "react";
import axios from "axios";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { throwStatement } from "@babel/types";

// defines data type for the input fields' values
export interface IValues {
  [key: string]: any;
}

// decleare the expected type for the state object of the application
export interface IFormProp {
  id: number;
  student: any;
  values: IValues[];
  submitSuccess: boolean;
  loading: boolean;
}

class EditRecord extends React.Component<RouteComponentProps<any>, IFormProp> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      student: {},
      values: [],
      loading: false,
      submitSuccess: false
    };
  }

  public componentDidMount(): void {
    axios.get("http://localhost:5000/student/" + this.state.id).then(data => {
      this.setState({ student: data.data });
    });
  }

  private processFormSubmission = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .put("http://localhost:5000/student/" + this.state.id, this.state.values)
      .then(data => {
        this.setState({ submitSuccess: true, loading: false });
        setTimeout(() => {
          this.props.history.push("/");
        }, 1500);
      });
  };

  private setValues = (values: IValues) => {
    this.setState({ values: { ...this.state.values, ...values } });
  };
  private handleUpdateValue = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setValues({ [e.currentTarget.id]: e.currentTarget.value });
  };

  public render() {
    const { submitSuccess, loading } = this.state;
    return (
      <div>
        {submitSuccess && (
          <div className="alert alert-info" role="aler">
            Your entry has been updated in the DB!!
          </div>
        )}

        <form
          id={"edit-form"}
          onSubmit={this.processFormSubmission}
          noValidate={true}
        >
          <div className="form-group col-md-12">
            <label htmlFor="REF_DATE">REF_DATE</label>
            <input
              type="text"
              id="REF_DATE"
              onChange={e => this.handleUpdateValue(e)}
              name="REF_DATE"
              className="form-control"
              placeholder=""
              defaultValue={this.state.student.REF_DATE}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="GEO">GEO</label>
            <input
              type="text"
              id="GEO"
              onChange={e => this.handleUpdateValue(e)}
              name="GEO"
              className="form-control"
              placeholder=""
              defaultValue={this.state.student.GEO}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="DGUID">DGUID</label>
            <input
              type="text"
              id="DGUID"
              onChange={e => this.handleUpdateValue(e)}
              name="DGUID"
              className="form-control"
              placeholder=""
              defaultValue={this.state.student.DGUID}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="Sex">Sex</label>
            <input
              type="text"
              id="Sex"
              onChange={e => this.handleUpdateValue(e)}
              name="Sex"
              className="form-control"
              placeholder=""
              defaultValue={this.state.student.Sex}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="AgeGroup">Age Group</label>
            <input
              type="text"
              id="AgeGroup"
              onChange={e => this.handleUpdateValue(e)}
              name="AgeGroup"
              className="form-control"
              placeholder=""
              defaultValue={this.state.student.AgeGroup}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="StudentResponse">Student Response</label>
            <input
              type="text"
              id="StudentResponse"
              onChange={e => this.handleUpdateValue(e)}
              name="StudentResponse"
              className="form-control"
              placeholder=""
              defaultValue={this.state.student.StudentResponse}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="UOM">UOM</label>
            <input
              type="text"
              id="UOM"
              onChange={e => this.handleUpdateValue(e)}
              name="UOM"
              className="form-control"
              placeholder=""
              defaultValue={this.state.student.UOM}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="UOM_ID">UOM_ID</label>
            <input
              type="text"
              id="UOM_ID"
              onChange={e => this.handleUpdateValue(e)}
              name="UOM_ID"
              className="form-control"
              placeholder=""
              defaultValue={this.state.student.UOM_ID}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="SCALAR_FACTOR">UOM_ID</label>
            <input
              type="text"
              id="SCALAR_FACTOR"
              onChange={e => this.handleUpdateValue(e)}
              name="SCALAR_FACTOR"
              className="form-control"
              placeholder=""
              defaultValue={this.state.student.SCALAR_FACTOR}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="SCALAR_ID">SCALAR_ID</label>
            <input
              type="text"
              id="SCALAR_ID"
              onChange={e => this.handleUpdateValue(e)}
              name="SCALAR_ID"
              className="form-control"
              placeholder=""
              defaultValue={this.state.student.SCALAR_ID}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="VECTOR">VECTOR</label>
            <input
              type="text"
              id="VECTOR"
              onChange={e => this.handleUpdateValue(e)}
              name="VECTOR"
              className="form-control"
              placeholder=""
              defaultValue={this.state.student.VECTOR}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="COORDINATE">COORDINATE</label>
            <input
              type="text"
              id="COORDINATE"
              onChange={e => this.handleUpdateValue(e)}
              name="COORDINATE"
              className="form-control"
              placeholder=""
              defaultValue={this.state.student.COORDINATE}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="VALUE">VALUE</label>
            <input
              type="text"
              id="VALUE"
              onChange={e => this.handleUpdateValue(e)}
              name="VALUE"
              className="form-control"
              placeholder=""
              defaultValue={this.state.student.VALUE}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="STATUS">STATUS</label>
            <input
              type="text"
              id="STATUS"
              onChange={e => this.handleUpdateValue(e)}
              name="STATUS"
              className="form-control"
              placeholder=""
              defaultValue={this.state.student.STATUS}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="SYMBOL">SYMBOL</label>
            <input
              type="text"
              id="SYMBOL"
              onChange={e => this.handleUpdateValue(e)}
              name="SYMBOL"
              className="form-control"
              placeholder=""
              defaultValue={this.state.student.SYMBOL}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="TERMINATED">TERMINATED</label>
            <input
              type="text"
              id="TERMINATED"
              onChange={e => this.handleUpdateValue(e)}
              name="TERMINATED"
              className="form-control"
              placeholder=""
              defaultValue={this.state.student.TERMINATED}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="DECIMALS">DECIMALS</label>
            <input
              type="text"
              id="DECIMALS"
              onChange={e => this.handleUpdateValue(e)}
              name="DECIMALS"
              className="form-control"
              placeholder=""
              defaultValue={this.state.student.DECIMALS}
            />
          </div>

          <div className="form-group col-md-4 pull-right">
            <button className="btn btn-primary" type="submit">
              Edit Record
            </button>
            {loading && <span className="fa fa-circle-o-notch fa-spin" />}
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(EditRecord);
