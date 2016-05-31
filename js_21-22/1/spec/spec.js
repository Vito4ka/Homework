var app = require('../script.js');

describe("app", function() {
  it("calls pow(3, 2) method", function() {
    // prepare
    var result;
    //_acestream_cache_\
    result = app.pow(3, 2);
    //assert
    expect(result).toBe(9);
  });
  it("calls pow(2, -3) method", function() {
    var result;
    result = app.pow(2, -3);
    expect(result).toBe(1 / 8);
  });
  it("calls pow(-2, 3) method", function() {
    var result;
    result = app.pow(-2, 3);
    expect(result).toBe(-8);
  });
  it("calls pow(5, 0) method", function() {
    var result;
    result = app.pow(5, 0);
    expect(result).toBe(1);
  });
});
