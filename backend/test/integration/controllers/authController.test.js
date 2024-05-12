import * as chai from "chai";
import sinon from "sinon";
import db from "../../../models/index.js";
import signingFunctions from "../../../controllers/authController.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const { expect } = chai;
const { signup, signin } = signingFunctions;
const User = db.user;

describe("Auth Controller:", async () => {
  beforeEach(() => {
    sinon.stub(console, "log");
    sinon.stub(console, "error");
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("signup", async () => {
    it("should create a new user and return a success message", async () => {
      const req = {
        body: {
          name: "test",
          username: "test",
          email: "test@test.com",
          password: "password",
        },
      };
      const res = {
        send: sinon.spy(),
        status: sinon.stub().returnsThis(),
      };

      const saveStub = sinon.stub(User.prototype, "save").resolves();

      await signup(req, res);

      expect(saveStub.calledOnce).to.be.true;
      expect(
        res.send.calledWith({ message: "User was registered successfully!" })
      ).to.be.true;
    });

    it("should return a 422 status and validation errors if validation fails", async () => {
      const req = {
        body: {
          name: "test",
          username: "test",
          email: "", // email is required
          password: "P@ssword123",
        },
      };
      const res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis(),
      };

      await signup(req, res);

      expect(res.status.calledWith(422)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      const response = res.json.firstCall.args[0];
      expect(response.message).to.equal("Validation failed"); //
    });

    it("should return a 500 status and error message if an error occurs", async () => {
      const req = {
        body: {
          name: "test",
          username: "test",
          email: "test@test.com",
          password: "P@ssword123",
        },
      };
      const res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis(),
        send: sinon.stub().returnsThis(),
      };

      const saveStub = sinon.stub(User.prototype, "save").rejects(new Error());

      await signup(req, res);

      expect(saveStub.calledOnce).to.be.true;
      expect(res.status.calledWith(500)).to.be.true;
    });
  });

  describe("signin", () => {
    it("should return user data and a token if the username and password are valid", async () => {
      const req = {
        body: {
          username: "test",
          password: "password",
        },
      };
      const res = {
        send: sinon.spy(),
        status: sinon.stub().returnsThis(),
      };

      const user = {
        id: "1",
        name: "test",
        username: "test",
        email: "test@test.com",
        password: await bcrypt.hash("password", 10),
      };

      const findOneStub = sinon.stub(User, "findOne").resolves(user);
      const compareStub = sinon.stub(bcrypt, "compare").resolves(true);
      const signStub = sinon.stub(jwt, "sign").returns("token");

      await signin(req, res);

      expect(findOneStub.calledOnce).to.be.true;
      expect(compareStub.calledOnce).to.be.true;
      expect(signStub.calledOnce).to.be.true;
      expect(
        res.send.calledWith({
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          accessToken: "token",
        })
      ).to.be.true;
    });

    it("should return user data and a token if the email and password are valid", async () => {
      const req = {
        body: {
          email: "test@test.com",
          password: "password",
        },
      };
      const res = {
        send: sinon.spy(),
        status: sinon.stub().returnsThis(),
      };

      const user = {
        id: "1",
        name: "test",
        username: "test",
        email: "test@test.com",
        password: await bcrypt.hash("password", 10),
      };

      const findOneStub = sinon.stub(User, "findOne").resolves(user);
      const compareStub = sinon.stub(bcrypt, "compare").resolves(true);
      const signStub = sinon.stub(jwt, "sign").returns("token");

      await signin(req, res);

      expect(findOneStub.calledOnce).to.be.true;
      expect(compareStub.calledOnce).to.be.true;
      expect(signStub.calledOnce).to.be.true;
      expect(
        res.send.calledWith({
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          accessToken: "token",
        })
      ).to.be.true;
    });

    it("should return a 500 status and error message if an error occurs", async () => {
      const req = {
        body: {
          username: "test",
          password: "password",
        },
      };
      const res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis(),
        send: sinon.stub().returnsThis(),
      };

      const findOneStub = sinon.stub(User, "findOne").rejects(new Error());

      await signin(req, res);

      expect(findOneStub.calledOnce).to.be.true;
      expect(res.status.calledWith(500)).to.be.true;
    });
  });
});
