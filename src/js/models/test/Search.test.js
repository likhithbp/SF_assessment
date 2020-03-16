import "babel-polyfill";
import Search from "../Search";
// describe("Search", () => {
//     it("should...", () => {
//       const anjaliFn = Search.prototype.anjali = jest.fn();
//       const person = new Search();
//       const expected = 6;
  
//       person.anjali();
  
//       expect(anjaliFn).toHaveBeenCalledTimes(1);
//       expect(person.anjali()).toBe(expected);
//     });
//   });

beforeAll(() => {
    //jest.spyOn(Search.prototype, 'anjali').mockImplementation(() => 'Hello');
});

afterAll(() => {
    jest.restoreAllMocks();
});

test('Modify class', () => {
    let search = new Search();
    const anjaliFn = Search.prototype.assignmentofRepresentative = jest.fn();
    search.assignmentofRepresentative();
    expect(anjaliFn).toHaveBeenCalledTimes(1);
  
});

test('Test Haversine', () => {
    let search = new Search();
    const anjaliFn = Search.prototype.assignmentofRepresentative = jest.fn();
    search.haversine();
    expect(anjaliFn).not.toBeNaN();
  
});



// test('Modify class', () => {
//     let search = new Search();
//     //const anjaliFn = Search.prototype.anjali = jest.fn();
    
//    expect(search.anjali()).toBe(6);
// });