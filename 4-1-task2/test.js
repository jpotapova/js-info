describe("isEmpty", function() {
  it("returns true for an empty object", function() {
    assert.isTrue(isEmpty({}));
  });

  it("returns true if no arguments are passed", function() {
    assert.isTrue(isEmpty());
  });

  it("returns true if null is passed", function() {
    assert.isTrue(isEmpty(null));
  });

  it("returns false if a primitive is passed", function() {
    assert.isFalse(isEmpty(1));
  });

  it("returns false if a property exists", function() {
    assert.isFalse(
      isEmpty({
        anything: false
      })
    );
  });

  it("returns false if a property exists but is undefined", function() {
    assert.isFalse(
      isEmpty({
        anything: undefined
      })
    );
  });

  it("returns true if an empty array is passed", function() {
    assert.isTrue(isEmpty([]));
  });

  it("returns false if a non-empty array is passed", function() {
    assert.isFalse(isEmpty(["some content"]));
  });
});
