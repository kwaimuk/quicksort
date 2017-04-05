/* jshint esversion: 6 */
const chai = require('chai');
const expect = chai.expect;

const quickSort = require('../quickSort.js');

describe('quickSort',() => {
  it('should be a function', () =>{
    expect(quickSort).to.be.a('function');
  });

  it('should do a simple sort of an array of a lenth of 3',() => {
  expect(quickSort([3,2,4])).to.deep.equal([2,3,4]);
    });

  it('should do a simple sort of an array of a lenth of 5',() => {
  expect(quickSort([3,2,4,1,8])).to.deep.equal([1,2,3,4,8]);
    });

  it('should do a simple sort of an array of a lenth of 5 with duplicate numbers',() => {
  expect(quickSort([7,7,0,7,8])).to.deep.equal([0,7,7,7,8]);
    });


});