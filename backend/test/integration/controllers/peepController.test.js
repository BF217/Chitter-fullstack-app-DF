import supertest from "supertest";
import { expect } from "chai";
import server from "../../../server.js";
import db from "../../../models/index.js";

const Peep = db.peep;
const User = db.user;
const request = supertest(server);

describe("Peep Controller", () => {
  let testUser;
  before(async () => {
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
    await server.close();
  });

  describe("GET /peeps", () => {
    it("should return all peeps", async () => {
      const peep = new Peep({
        author: testUser._id,
        content: "content1",
      });
      await peep.save();

      const res = await request.get("/peeps");

      expect(res.status).to.equal(200);
      expect(res.body.length).to.equal(1);
      expect(res.body[0].content).to.equal("content1");
    });
  });

  describe("GET /peeps/:id", () => {
    it("should return a peep by id", async () => {
      const peep = new Peep({
        author: testUser._id,
        content: "content1",
      });
      await peep.save();

      const res = await request.get(`/peeps/${peep._id}`);

      expect(res.status).to.equal(200);
      expect(res.body.content).to.equal("content1");
    });
  });

  // tested post with postman as it involves needing a token from sign in, see postman tests folder for results
});
