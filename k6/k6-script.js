// Auto-generated by the Load Impact converter

import "./libs/shim/core.js";
import "./libs/shim/expect.js";

import http from "k6/http";
import { check, sleep } from "k6";
import { Counter } from "k6/metrics";


export let options = {  
  maxRedirects: 4,
  vus: 15,
  duration: "15s",                 
};

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
  environment: {
    todos: "todos"
  }
});

export default function() {
  postman[Request]({
    name: "EjemploAPI",
    id: "0e06caa9-88d4-4091-8a45-b06b383fb9c3",
    method: "GET",
    address: "https://jsonplaceholder.typicode.com/{{todos}}",
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);

        pm.response.to.be.ok;
        pm.response.to.be.withBody;
        pm.response.to.be.json;
      });

      pm.test("Content-Type is present", function() {
        pm.response.to.have.header("Content-Type");
      });

      pm.test("Response time is less than 500ms", function() {
        pm.expect(pm.response.responseTime).to.be.below(500);
      });
    }
  });
}
