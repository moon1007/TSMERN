import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 *  DB schema
 * */

export const StudentSchema = new Schema(
  {
    REF_DATE: { type: Number, required: true },
    GEO: { type: String, required: false },
    DGUID: { type: String, required: false },
    Sex: { type: String, required: false },
    AgeGroup: { type: String, required: false },
    StudentResponse: { type: String, required: false },
    UOM: { type: String, required: false },
    UOM_ID: { type: String, required: false },
    SCALAR_FACTOR: { type: String, required: false },
    SCALAR_ID: { type: String, required: false },
    VECTOR: { type: String, required: false },
    COORDINATE: { type: String, required: false },
    STATUS: { type: String, required: false },
    SYMBOL: { type: String, required: false },
    TERMINATED: { type: String, required: false },
    DECIMALS: { type: String, required: false }
  },
  {
    timestamps: true
  }
);
