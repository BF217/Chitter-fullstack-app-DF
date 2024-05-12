import * as chai from "chai";
import jwt from "jsonwebtoken";
import verifyToken from "../../../middleware/verifyToken.js";

const { expect } = chai;

describe("middleware: verifyToken", () => {
  it("should return 403 if no token is provided", () => {
    const req = { headers: {} };
    const res = {
      status: function (status) {
        this.statusCode = status;
        return this;
      },
      send: function (message) {
        this.message = message;
        return this;
      },
    };
    const next = () => {};

    verifyToken(req, res, next);

    expect(res.statusCode).to.equal(403);
    expect(res.message).to.deep.equal({ message: "No token provided!" });
  });

  it("should return 401 if the token is invalid", () => {
    const req = { headers: { "x-access-token": "invalid token" } };
    const res = {
      status: function (status) {
        this.statusCode = status;
        return this;
      },
      send: function (message) {
        this.message = message;
        return this;
      },
    };
    const next = () => {};

    verifyToken(req, res, next);

    expect(res.statusCode).to.equal(401);
    expect(res.message).to.deep.equal({ message: "Unauthorized!" });
  });

  it("should call next if the token is valid", () => {
    const token = jwt.sign({ id: "123" }, process.env.SECRET);
    const req = { headers: { "x-access-token": token } };
    const res = {
      status: function (status) {
        this.statusCode = status;
        return this;
      },
      send: function (message) {
        this.message = message;
        return this;
      },
    };
    let nextCalled = false;
    const next = () => {
      nextCalled = true;
    };

    verifyToken(req, res, next);

    expect(nextCalled).to.be.true;
    expect(req.userId).to.equal("123");
  });

  it("should return 401 if the token is in incorrect format", () => {
    const req = { headers: { "x-access-token": "invalid.format.token" } };
    const res = {
      status: function (status) {
        this.statusCode = status;
        return this;
      },
      send: function (message) {
        this.message = message;
        return this;
      },
    };
    const next = () => {};

    verifyToken(req, res, next);

    expect(res.statusCode).to.equal(401);
    expect(res.message).to.deep.equal({ message: "Unauthorized!" });
  });

  it("should return 401 if the token payload can't be decoded", () => {
    const token = jwt.sign({ data: "123" }, process.env.SECRET, {
      algorithm: "none",
    });
    const req = { headers: { "x-access-token": token + "tamper" } };
    const res = {
      status: function (status) {
        this.statusCode = status;
        return this;
      },
      send: function (message) {
        this.message = message;
        return this;
      },
    };
    const next = () => {};

    verifyToken(req, res, next);

    expect(res.statusCode).to.equal(401);
    expect(res.message).to.deep.equal({ message: "Unauthorized!" });
  });

  it("should return 401 if the token signature is incorrect", () => {
    const token = jwt.sign({ id: "123" }, "wrong-secret");
    const req = { headers: { "x-access-token": token } };
    const res = {
      status: function (status) {
        this.statusCode = status;
        return this;
      },
      send: function (message) {
        this.message = message;
        return this;
      },
    };
    const next = () => {};

    verifyToken(req, res, next);

    expect(res.statusCode).to.equal(401);
    expect(res.message).to.deep.equal({ message: "Unauthorized!" });
  });

  it("should return 401 if the token is a non-string value", () => {
    const req = { headers: { "x-access-token": 12345 } };
    const res = {
      status: function (status) {
        this.statusCode = status;
        return this;
      },
      send: function (message) {
        this.message = message;
        return this;
      },
    };
    const next = () => {};

    verifyToken(req, res, next);

    expect(res.statusCode).to.equal(401);
    expect(res.message).to.deep.equal({ message: "Unauthorized!" });
  });
});
