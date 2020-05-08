import { Request, Response } from "express";
import { StudentController } from "../controllers/studentController";

/**
 * All the routes that has been set is in this file
 * connect between requests from user and controller
 */
export class Routes {
  public studentController: StudentController = new StudentController();

  // initial localhost call without db name (check connectivity)
  // successful -> return status code 200 and it will used for test
  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        msg: "Initial Get is successful"
      });
    });

    app.route("/student").post(this.studentController.addNewStudent); // Add student record (ex : localhost:3000/student)

    app.route("/student").get(this.studentController.getStudents); // Load student record (ex : localhost:3000/student)

    app
      .route("/student/:studentId")
      .get(this.studentController.getStudentWithID); // Load student record by its record id (ex : localhost:3000/student/id)

    app.route("/student/:studentId").put(this.studentController.updateStudent); // Update a student record

    app
      .route("/student/:studentId")
      .delete(this.studentController.deleteStudent); // Delete a student record
  }
}
