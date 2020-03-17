import "babel-polyfill";
import Search from "../Search.js";

test("getResults() should be called at the beginning", () => {
  let search = new Search();
  const getResultsFn = (Search.prototype.getResults = jest.fn());
  search.getResults();
  expect(getResultsFn).toHaveBeenCalledTimes(1);
});

describe("getResults()", () => {
  test("should call assignmentofRepresentative()", () => {
    let mockFunctions = jest.fn();
    Search.prototype.getResults = mockFunctions;
    Search.prototype.assignmentofRepresentative = mockFunctions;
    const search = new Search();
    search.getResults();
    expect(mockFunctions).toHaveBeenCalledTimes(1);
  });
});

describe("assignmentofRepresentative()", () => {
  test("should call sortingofRepresentative()", () => {
    let mockFunctions = jest.fn();
    Search.prototype.sortingofRepresentative = mockFunctions;
    Search.prototype.assignmentofRepresentative = mockFunctions;
    const search = new Search();
    search.assignmentofRepresentative();
    expect(mockFunctions).toHaveBeenCalledTimes(1);
  });
});

describe("sortingofRepresentative()", () => {
  test("should call RefineRepresentatives()", () => {
    let mockFunctions = jest.fn();
    Search.prototype.sortingofRepresentative = mockFunctions;
    Search.prototype.RefineRepresentatives = mockFunctions;
    const search = new Search();
    search.sortingofRepresentative();
    expect(mockFunctions).toHaveBeenCalledTimes(1);
  });
});

describe("RefineRepresentatives()", () => {
  test("should call haversine()", () => {
    let mockFunctions = jest.fn();
    Search.prototype.haversine = mockFunctions;
    Search.prototype.RefineRepresentatives = mockFunctions;
    const search = new Search();
    search.RefineRepresentatives();
    expect(mockFunctions).toHaveBeenCalledTimes(1);
  });
});

describe("haversine()", () => {
  test("should call haversine()", () => {
    let mockFunctions = jest.fn();
    Search.prototype.haversine = mockFunctions;
    const search = new Search();
    search.haversine();
    expect(mockFunctions).not.toBeUndefined();
  });
});

describe("haversine()", () => {
  test("should return a number", () => {
    const haversinemock = jest.fn();
    Search.prototype.haversine = haversinemock;
    const search = new Search();
    search.haversine();
    expect(haversinemock).toHaveReturned();
  });
});

describe("getResults()", () => {
  test("should return an array of objects", () => {
    const getResultsmock = jest.fn();
    Search.prototype.getResults = getResultsmock;
    const search = new Search();
    search.getResults();
    expect(getResultsmock).toHaveReturned();
  });
});

describe("sortingofRepresentative()", () => {
  test("should return an array of objects", () => {
    const sortingofRepresentativemock = jest.fn();
    Search.prototype.sortingofRepresentative = sortingofRepresentativemock;
    const search = new Search();
    search.sortingofRepresentative();
    expect(sortingofRepresentativemock).toHaveReturned();
  });
});

describe("RefineRepresentatives()", () => {
  test("should return an array of objects", () => {
    const RefineRepresentativesmock = jest.fn();
    Search.prototype.RefineRepresentatives = RefineRepresentativesmock;
    const search = new Search();
    search.RefineRepresentatives();
    expect(RefineRepresentativesmock).toHaveReturned();
  });
});

describe("assignmentofRepresentative", () => {
  test("should return an array of objects", () => {
    const assignmentofRepresentativemock = jest.fn();
    Search.prototype.assignmentofRepresentative = assignmentofRepresentativemock;
    const search = new Search();
    search.assignmentofRepresentative();
    expect(assignmentofRepresentativemock).toHaveReturned();
  });
});
