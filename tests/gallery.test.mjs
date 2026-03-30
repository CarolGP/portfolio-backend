import test from "node:test";
import assert from "node:assert";
import request from "supertest";

import app from "../index.js";


test("GET /gallery devuelve array", async () => {

  const res = await request(app).get("/gallery");

  assert.equal(res.statusCode, 200);

  assert.ok(Array.isArray(res.body));

});

test("DELETE endpoint existe", async () => {

  const res = await request(app).delete("/gallery/123");

  assert.ok([200,500].includes(res.statusCode));

});