import sinon from "sinon";
import { expect } from "chai";
import db from "../../../models/index.js";
import checkDuplicateUsernameOrEmail from "../../../middleware/checkDuplicateUsernameOrEmail.js";

const User = db.user;

describe("middleware: checkDuplicateUsernameOrEmail", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should send a 400 response if username is already in use", async () => {
    const req = { body: { username: "test", email: "test@test.com" } };
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
    const next = sinon.spy();

    const findOneStub = sinon.stub(db.user, "findOne");
    findOneStub.withArgs({ username: "test" }).returns({
      exec: sinon.stub().yields(null, { username: "test" }),
    });

    await checkDuplicateUsernameOrEmail(req, res, next);

    expect(res.statusCode).to.equal(400);
    expect(res.message).to.deep.equal({
      message: "Failed! Username is already in use!",
    });
    expect(next.called).to.be.false;
  });

  it("should send a 400 response if email is already in use", async () => {
    const req = { body: { username: "test", email: "test@test.com" } };
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
    const next = sinon.spy();

    const findOneStub = sinon.stub(db.user, "findOne");
    findOneStub.withArgs({ email: "test@test.com" }).returns({
      exec: sinon.stub().yields(null, { email: "test@test.com" }),
    });

    await checkDuplicateUsernameOrEmail(req, res, next);

    expect(res.statusCode).to.equal(400);
    expect(res.message).to.deep.equal({
      message: "Failed! Email is already in use!",
    });
    expect(next.called).to.be.false;
  });

  it("should call next if username and email are not in use", async () => {
    const req = { body: { username: "test", email: "test@test.com" } };
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
    const next = sinon.spy();

    const findOneStub = sinon.stub(User, "findOne");
    findOneStub.withArgs({ username: "test" }).resolves(null);
    findOneStub.withArgs({ email: "test@test.com" }).resolves(null);

    await checkDuplicateUsernameOrEmail(req, res, next);

    expect(next.calledOnce).to.be.true;
  });

  it("should send a 500 response if an error occurs when checking the username", async () => {
    const req = { body: { username: "test", email: "test@test.com" } };
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
    const next = sinon.spy();

    const findOneStub = sinon.stub(User, "findOne");
    findOneStub.withArgs({ username: "test" }).rejects(new Error("Test error"));
    findOneStub.withArgs({ email: "test@test.com" }).resolves(null);

    await checkDuplicateUsernameOrEmail(req, res, next);

    expect(res.statusCode).to.equal(500);
    expect(res.message).to.be.an("object");
    expect(res.message.message).to.be.instanceOf(Error);
    expect(res.message.message.message).to.equal("Test error");
    expect(next.called).to.be.false;
  });

  it("should send a 500 response if an error occurs when checking the email", async () => {
    const req = { body: { username: "test", email: "test@test.com" } };
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
    const next = sinon.spy();

    const findOneStub = sinon.stub(User, "findOne");
    findOneStub.withArgs({ username: "test" }).resolves(null);
    findOneStub
      .withArgs({ email: "test@test.com" })
      .rejects(new Error("Test error"));

    await checkDuplicateUsernameOrEmail(req, res, next);

    expect(res.statusCode).to.equal(500);
    expect(res.message).to.be.an("object");
    expect(res.message.message).to.be.instanceOf(Error);
    expect(res.message.message.message).to.equal("Test error");
    expect(next.called).to.be.false;
  });
});
