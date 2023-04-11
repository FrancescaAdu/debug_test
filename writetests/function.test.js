const { findLargest } = require("./function");

test("findLargest", () => {
  expect(findLargest).toBeDefined();
});

test("findLargest - is a function", () => {
  expect(findLargest instanceof Function).toEqual(true);
});

test("findLargest - retuns a number", () => {
  expect(typeof findLargest() == "number").toEqual(true);
});

test("findLargest - identifies the largest value's index", () => {
  expect(findLargest([1, 1, 4, 1])).toEqual(2);
});

test("findLargest - returns -1 if no values are passed in", () => {
  expect(findLargest([])).toEqual(-1);
});

// ! SIMPLE VERSION - SHORTENED

// const {findLargest} = require("./function")

// describe("findLargest", () => {
//     it("exists", ()=> {
//         expect(findLargest).toBeDefined();
//     });
    
//     it("is a function", ()=>{
//         expect(findLargest instanceof Function).toEqual(true);
//     });
//     it("returns a number", ()=>{
//         expect(typeof findLargest() == 'number').toEqual(true);
//     });
//     it("identifies the largest value's index", () =>{
//         expect(findLargest([1,1,4,1])).toEqual(2);
//     });
//     it("returns -1 if no values are passed in", ()=>{
//         expect(findLargest([])).toEqual(-1);
//     });
// });