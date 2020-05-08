import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import axios from "axios";

const url = "http://localhost:5000/";
var statusMSG: string = "";

describe("Assign4 Test", () => {
  it("GET REST API TEST", () => {
    axios.get(url).then(data => {
      expect(data.status).toBe(200);
    });
  });

  it("initial message", () => {
    axios.get(url).then(data => {
      statusMSG = JSON.stringify(data.data[0]);
      expect(statusMSG).toBe("Initial Get is successful");
    });
  });
});
