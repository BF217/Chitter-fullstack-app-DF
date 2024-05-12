import Peep from "../../../models/peep.js";
import User from "../../../models/user.js";

import { expect } from "chai";
import { config } from "dotenv";
import mongoose from "mongoose";

config({ path: `.env.${process.env.NODE_ENV}` });

describe("Peep model", () => {
  let testUser;

  before(async () => {
    const dbUri = `${process.env.DB_URI}:${process.env.DB_PORT}/${process.env.DB}`;
    await mongoose.connect(dbUri);
    testUser = new User({
      name: "Test User",
      username: "testuser",
      email: "testuser@example.com",
      password: "P@ssword123",
    });

    await testUser.save();
  });

  beforeEach(async () => {
    await Peep.deleteMany({});
  });

  after(async () => {
    await User.deleteMany({});
    await Peep.deleteMany({});
    await mongoose.connection.close();
  });

  it("should require author", async () => {
    const peep = new Peep({
      content: "Hello, world!",
    });
    let error;
    try {
      await peep.validate();
    } catch (err) {
      error = err;
    }
    expect(error).to.exist;
    expect(error.errors.author).to.exist;
  });

  it("should not accept an invalid author id", async () => {
    const peep = new Peep({
      author: "invalid",
      content: "Hello, world!",
    });

    let error;
    try {
      await peep.validate();
    } catch (err) {
      error = err;
    }

    expect(error).to.exist;
    expect(error.errors.author).to.exist;
  });

  it("should require content", async () => {
    const peep = new Peep({
      author: testUser._id,
    });

    let error;
    try {
      await peep.validate();
    } catch (err) {
      error = err;
    }
    expect(error).to.exist;
    expect(error.errors.content).to.exist;
  });

  it("should automatically set createdAt to the current date", async () => {
    const peep = new Peep({
      author: testUser._id,
      content: "Hello, world!",
    });

    await peep.save();

    expect(peep.createdAt).to.exist;
    expect(peep.createdAt.getTime()).to.be.closeTo(new Date().getTime(), 2000);
  });

  it("should create a new Peep with valid data", async () => {
    const peep = new Peep({ author: testUser._id, content: "Hello, world!" });
    await peep.validate();
    expect(peep.author).to.equal(testUser._id);
    expect(peep.content).to.equal("Hello, world!");
  });

  it("should not allow peeps to contain more than 280 characters", async () => {
    const longContent = "a".repeat(281); // creates a string the consists of "a" 281 times to exceed the 280 character limit
    const peep = new Peep({ author: testUser._id, content: longContent });

    let error;
    try {
      await peep.validate();
    } catch (err) {
      error = err;
    }

    expect(error).to.exist;
    expect(error.errors.content).to.exist;
  });

  it("should automatically set createdAt to the current date", async () => {
    const peep = new Peep({
      author: testUser._id,
      content: "Hello, world!",
    });

    await peep.save();

    expect(peep.createdAt).to.exist;
    expect(peep.createdAt.getTime()).to.be.closeTo(new Date().getTime(), 2000);
  });

  it("should retrieve a saved Peep from the database", async () => {
    const peep = new Peep({
      author: testUser._id,
      content: "This is a peep",
    });

    await peep.save();

    const retrievedPeep = await Peep.findById(peep._id);
    expect(retrievedPeep).to.exist;
    expect(retrievedPeep._id).to.eql(peep._id);
  });
});
