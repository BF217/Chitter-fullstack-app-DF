import * as chai from "chai";
import server from "../../../server.js";
import User from "../../../models/user.js";
import supertest from "supertest";
import Sinon from "sinon";

const { expect } = chai;

describe("integration tests: Auth Routes", () => {
  const request = supertest(server);

  beforeEach(() => {
    Sinon.stub(console, "log");
  });

  afterEach(async () => {
    User.deleteMany({});
    Sinon.restore();
  });

  after(async () => {
    await server.close();
  });

  describe("POST /signup", () => {
    it("should create a new user", async () => {
      const res = await request
        .post("/auth/signup")
        .send({
          name: "Test User",
          username: "testUser",
          email: "test@test.com",
          password: "P@ssword123",
        })
        .expect(200);

      expect(res.body).to.have.property(
        "message",
        "User was registered successfully!"
      );
    });
  });

  describe("POST /signin", () => {
    it("should sign in a user", async () => {
      // First, create a user to sign in
      await request.post("/auth/signup").send({
        name: "Test User",
        username: "testUser",
        email: "test@test.com",
        password: "P@ssword123",
      });

      const res = await request
        .post("/auth/signin")
        .send({
          username: "testUser",
          password: "P@ssword123",
        })
        .expect(200);

      expect(res.body).to.have.property("username", "testUser");
      expect(res.body).to.have.property("accessToken");
    });
  });
});
