const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const { UserModel } = require("../database");
const UserRepository = require("./user.repository");
const {describe} = require("mocha/lib/cli/run");

describe("UserRepository", function () {
    const stubValue = {
        id: faker.random.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
    };

    describe("create", function () {
        it('should add a new user to the database', async function () {
            const stub = sinon.stub(UserModel, "create").returns(stubValue);
            const userRepository = new UserRepository();
            const user = await userRepository.create(stubValue.name, stubValue.email)
            expect(stub.calledOnce).to.be.true;
            expect(user.id).to.equal(stubValue.id);
            expect(user.name).to.equal(stubValue.name);
            expect(user.createdAt).to.equal(stubValue.createdAt);
            expect(user.updatedAt).to.equal(stubValue.updatedAt);
        });
    });

    describe("getUser", function () {
        it('should retrieve a user with specific id', async function () {
            const stub = sinon.stub(UserModel, "findOne").returns(stubValue);
            const userRepository = new UserRepository();
            const user = await userRepository.getUser(stubValue.id);
            expect(stub.calledOnce).to.be.true;
            expect(user.id).to.equal(stubValue.id);
            expect(user.name).to.equal(stubValue.name);
            expect(user.createdAt).to.equal(stubValue.createdAt);
            expect(user.updatedAt).to.equal(stubValue.updatedAt);

        });
    })
});

//The above code is testing the create method of the UserRepository .
// Notice that we are stubbing the UserModel.create method. The stub is necessary because our goal is to test
// the repository and not the model.
