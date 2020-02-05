describe("sumSalaries", function() {
  it("returns 0 for an empty object", function() {
    assert.strictEqual(sumSalaries({}), 0);
  });

  it("returns the sum of all salaries in the list", function() {
    let salaries = {
      John: 100,
      Ann: 160,
      Pete: 130
    };
    assert.strictEqual(sumSalaries(salaries), 390);
  });
});
