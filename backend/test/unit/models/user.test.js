import { expect } from "chai";
import mongoose from "mongoose";
import User from "../../../models/user.js";
import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV}` });

describe("User model", () => {
  before(async () => {
    const dbUri = `${process.env.DB_URI}:${process.env.DB_PORT}/${process.env.DB}`;
    await mongoose.connect(dbUri);
  });

  beforeEach(async () => {
    await User.deleteMany({});
  });

  after(async () => {
    await mongoose.connection.close();
  });

  it("should create a new User with valid data", async () => {
    const user = new User({
      name: "Test User",
      username: "testuser",
      email: "testuser@example.com",
      password: "P@ssword123",
    });

    await user.validate();

    expect(user.name).to.equal("Test User");
    expect(user.username).to.equal("testuser");
    expect(user.email).to.equal("testuser@example.com");
    expect(user.password).to.equal("P@ssword123");
  });

  it("should require name", async () => {
    const user = new User({
      username: "testuser",
      email: "testuser@example.com",
      password: "P@ssword123",
    });

    let error;
    try {
      await user.validate();
    } catch (e) {
      error = e;
    }

    expect(error).to.exist;
    expect(error.errors.name).to.exist;
  });

  it("should require username", async () => {
    const user = new User({
      name: "Test User",
      email: "testuser@example.com",
      password: "P@ssword123",
    });

    let error;
    try {
      await user.validate();
    } catch (e) {
      error = e;
    }

    expect(error).to.exist;
    expect(error.errors.username).to.exist;
  });

  it("should require email", async () => {
    const user = new User({
      name: "Test User",
      username: "testuser",
      password: "P@ssword123",
    });

    let error;
    try {
      await user.validate();
    } catch (e) {
      error = e;
    }

    expect(error).to.exist;
    expect(error.errors.email).to.exist;
  });

  it("should require password", async () => {
    // password follows same validation used by frontend to double down on security
    const user = new User({
      name: "Test User",
      username: "testuser",
      email: "testuser@example.com",
    });

    let error;
    try {
      await user.validate();
    } catch (e) {
      error = e;
    }

    expect(error).to.exist;
    expect(error.errors.password).to.exist;
  });

  it("should require unique username and email", async () => {
    const user1 = new User({
      name: "Test User",
      username: "testuser",
      email: "testuser@example.com",
      password: "P@ssword123",
    });
    await user1.save();

    const user2 = new User({
      name: "Test User 2",
      username: "testuser",
      email: "testuser@example.com",
      password: "P@ssword123",
    });

    let error;
    try {
      await user2.save();
    } catch (e) {
      error = e;
    }

    expect(error).to.exist;
  });

  it("should trim name, username, and email", async () => {
    const user = new User({
      name: " Test User ",
      username: " testuser ",
      email: " testuser@example.com ",
      password: "P@ssword123",
    });

    expect(user.name).to.equal("Test User");
    expect(user.username).to.equal("testuser");
    expect(user.email).to.equal("testuser@example.com");
  });

  it("should require password to be at least 8 characters", async () => {
    const user = new User({
      name: "Test User",
      username: "testuser",
      email: "testuser@example.com",
      password: "P@ss1",
    });

    let error;
    try {
      await user.save();
    } catch (e) {
      error = e;
    }

    expect(error).to.exist;
    expect(error.errors.password).to.exist;
  });

  it("should require password to contain at least one uppercase character", async () => {
    const user = new User({
      name: "Test User",
      username: "testuser",
      email: "testuser@example.com",
      password: "p@ssword123",
    });

    let error;
    try {
      await user.save();
    } catch (e) {
      error = e;
    }

    expect(error).to.exist;
    expect(error.errors.password).to.exist;
    expect(error.errors.password.message).to.equal(
      "Password must contain at least one uppercase character"
    );
  });

  it("should require password to contain at least one lowercase character", async () => {
    const user = new User({
      name: "Test User",
      username: "testuser",
      email: "testuser@example.com",
      password: "P@SSWORD123",
    });

    let error;
    try {
      await user.save();
    } catch (e) {
      error = e;
    }

    expect(error).to.exist;
    expect(error.errors.password).to.exist;
    expect(error.errors.password.message).to.equal(
      "Password must contain at least one lowercase character"
    );
  });

  it("should require password to contain at least one number", async () => {
    const user = new User({
      name: "Test User",
      username: "testuser",
      email: "testuser@example.com",
      password: "P@ssword",
    });

    let error;
    try {
      await user.save();
    } catch (e) {
      error = e;
    }

    expect(error).to.exist;
    expect(error.errors.password).to.exist;
    expect(error.errors.password.message).to.equal(
      "Password must contain at least one number"
    );
  });

  it("should require password to contain at least one special character", async () => {
    const user = new User({
      name: "Test User",
      username: "testuser",
      email: "testuser@example.com",
      password: "Password1",
    });

    let error;
    try {
      await user.save();
    } catch (e) {
      error = e;
    }

    expect(error).to.exist;
    expect(error.errors.password).to.exist;
    expect(error.errors.password.message).to.equal(
      "Password must contain at least one special character (!@#$%^&*)"
    );
  });
});
