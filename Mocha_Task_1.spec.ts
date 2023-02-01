import { registrationForm } from "./registration";
import {registrationForm1} from "./registration1";
import assert = require ('assert')
import {describe} from "node:test";

describe("Test", function () {
    it ('correctly calculates the sum of 1 and 3', () => {
        assert.equal(registrationForm.add(1,3),4)
    })
    it ('correctly calculate the sum of -1 and -1', () => {
        assert.equal(registrationForm.add(-1,-1), -2)
    })
    it ('correctly calculate the difference of 33 and 3', () => {
        assert.equal(registrationForm.subtract(33,3), 30)
    })
    it('correctly calculate the product of 12 and 13', () => {
        assert.notEqual(registrationForm.multiply(12, 13), true)
    })
    it('correctly calculate the product of 13 and 13', () => {
        assert.notDeepEqual(registrationForm.comparison(13, 13), true)
    })
})

///////////////////
describe("Test2", function () {
    it('correctly calculate the product' , () => {
        assert.equal(registrationForm.number(10, 10), 100)
    })
    it('correctly calculate the product' , () => {
        assert.equal(registrationForm.number1(10, 13), 130)
    })
    it('correctly calculate the product' , () => {
        assert.equal(registrationForm.number2(10, 5), 50)
    })
    it('correctly calculate the product' , () => {
        assert.equal(registrationForm.number3(2.46, 100, 200), false)
    })
    it('correctly calculate the product' , () => {
        assert.equal(registrationForm.number4(2.46, 130, 200), false)
    })
    it('correctly calculate the product' , () => {
        assert.equal(registrationForm.number5(2.46, 50, 200), true)
    })
})

