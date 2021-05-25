import { VegetablePlant } from "../src/VegetablePlant";
const chai = require("chai");
const assert = chai.assert;

describe("Vegetable Plant Tests", function () {
  let myVegetablePlant;

  beforeEach(() => {
    myVegetablePlant = new VegetablePlant("Cabbage");
  });

  it("should be a vegetable plant", function () {
    assert.instanceOf(myVegetablePlant, VegetablePlant);
  });

  it("should be given a name", function () {
    assert.equal(myVegetablePlant.name, "Cabbage");
  });

  it("should be watered", function () {
    myVegetablePlant.water();
    assert.strictEqual(myVegetablePlant.lastDayWatered, 0);
  });

  it("can be neglected", function () {
    myVegetablePlant.neglect();
    assert.isAbove(myVegetablePlant.lastDayWatered, 0);
  });
});

/*
    Let's create another test case to verify that our plant withers after 3 days of being neglected.
    Create a test case with the string `"should wither after 3 days of being neglected"` and pass in an empty function.
*/
