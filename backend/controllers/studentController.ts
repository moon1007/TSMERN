import * as mongoose from "mongoose";
import { StudentSchema } from "../models/studentModel";
import { Request, Response } from "express";

const Student = mongoose.model("Student", StudentSchema);

/**
 * controller includes API call process for CRUD requests
 */
export class StudentController {
  public addNewStudent(req: Request, res: Response) {
    let newStudent = new Student(req.body);

    newStudent.save((err, student) => {
      if (err) {
        res.send(err);
      }
      res.json(student);
    });
  }

  public getStudents(req: Request, res: Response) {
    Student.find({}, (err, student) => {
      if (err) {
        res.send(err);
      }
      res.json(student);
    });
  }

  public getStudentWithID(req: Request, res: Response) {
    Student.findById(req.params.studentId, (err, student) => {
      if (err) {
        res.send(err);
      }
      res.json(student);
    });
  }

  public updateStudent(req: Request, res: Response) {
    Student.findOneAndUpdate(
      { _id: req.params.studentId },
      req.body,
      { new: true },
      (err, student) => {
        if (err) {
          res.send(err);
        }
        res.json(student);
      }
    );
  }

  public deleteStudent(req: Request, res: Response) {
    Student.remove({ _id: req.params.studentId }, (err, student) => {
      if (err) {
        res.send(err);
      }
      res.json({ msg: "deleted!" });
    });
  }
}
