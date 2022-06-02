const chai = require("chai")
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const UserController = require("./user.controller");
const UserService = require("./user.service");
const UserRepository = require("./user.repository");


describe("UserController", function () {
    describe("register", function () {
        let status, json, res, userController, userService;
        beforeEach(() => {
            status = sinon.stub();

        })
    })
})
