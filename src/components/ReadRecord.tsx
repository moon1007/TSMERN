import * as React from "react";
import axios from "axios";
import { Link, RouteComponentProps } from "react-router-dom";

/**
 * Middle Layer with rendering presentation layer (right side of view component)
 */
// Properties that contains all list 'students' from JSON file
// Added total number for assignment 4 unit test
export interface AllState {
  students: any[];
  total: number;
  url: string;
}

export interface IValues {
  [key: string]: any;
}
export interface IListtate {
  students: any[];
  // id: number;
  student: any;
  values: IValues[];
  total: number;
  url: string;
}

/**
 * User will see all loaded list from JSON file as a table -> Perform 'edit' when they click each cell and 'delete' when a user clicks del button on a desired row
 * -> update & del request -> push to JSON (Server side)
 */
export default class ReadRecord extends React.Component<
  RouteComponentProps,
  IListtate
> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      students: [],
      //id: this.props.match.params.id,
      student: {},
      values: [],
      total: 0,
      url: "http://localhost:5000/student/"
    };
  }

  // Read - Load all data from JSON (Server side) using GET
  public componentDidMount(): void {
    axios.get("http://localhost:5000/student/").then(data => {
      this.setState({ students: data.data });
      console.log("Suhwa Moon - GET");
      const num = data.data.length;
      const example = JSON.stringify(data.data[0]);
      console.log("Total Number of Data :" + num);
      console.log("First Row :" + example);
      this.setState({ total: data.data.length });
    });
  }

  // Delete - Delete a selected row
  public deleteRecord(id: number) {
    console.log("Delete");
    console.log("Selected id : " + id);
    let url = this.state.url + id;

    axios.delete(url).then(() => {
      const dbIdx = this.state.students.findIndex(student => student.id === id);
      //console.log("DB Index : " + dbIdx); // check index in JSON file for tracking purpose
      this.state.students.splice(dbIdx, 1);
      this.props.history.push("/");
    });
  }

  /**
   * Renders the 'List' on the right side of the web app
   *
   */
  public render() {
    const students = this.state.students;

    return (
      <div>
        {students.length === 0 && (
          <div className="text-center">
            <h2>No Record Saved</h2>
          </div>
        )}
        <button
          className="btn btn-md btn-outline-secondary"
          onClick={() => this.componentDidMount()}
        >
          Refresh
        </button>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">REF_DATE</th>
              <th scope="col">GEO</th>
              <th scope="col">DGUID</th>
              <th scope="col">Sex</th>
              <th scope="col">Age group</th>
              <th scope="col">Student reponse</th>
              <th scope="col">UOM</th>
              <th scope="col">UOM_ID</th>
              <th scope="col">SCALAR_FACTOR</th>
              <th scope="col">SCALAR_ID</th>
              <th scope="col">VECTOR</th>
              <th scope="col">COORDINATE</th>
              <th scope="col">VALUE</th>
              <th scope="col">STATUS</th>
              <th scope="col">SYMBOL</th>
              <th scope="col">TERMINATED</th>
              <th scope="col">DECIMALS</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>

          <tbody>
            {students &&
              students.map(student => (
                <tr key={student.VECTOR}>
                  <td>{student.REF_DATE}</td>
                  <td>{student.GEO}</td>
                  <td>{student.DGUID}</td>
                  <td>{student.Sex}</td>
                  <td>{student.AgeGroup}</td>
                  <td>{student.StudentResponse}</td>
                  <td>{student.UOM}</td>
                  <td>{student.UOM_ID}</td>
                  <td>{student.SCALAR_FACTOR}</td>
                  <td>{student.SCALAR_ID}</td>
                  <td>{student.VECTOR}</td>
                  <td>{student.COORDINATE}</td>
                  <td>{student.VALU}</td>
                  <td>{student.STATUS}</td>
                  <td>{student.SYMBOL}</td>
                  <td>{student.TERMINATED}</td>
                  <td>{student.DECIMALS}</td>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div
                        className="btn-group"
                        style={{ marginBottom: "20px" }}
                      >
                        <Link
                          to={"/" + student._id}
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </Link>

                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => this.deleteRecord(student._id)}
                        >
                          Del
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
