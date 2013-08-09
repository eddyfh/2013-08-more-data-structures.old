describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
    tree.addChild('newkid');
  });

  it("should be able to add a child", function() {
    expect(tree.children[0].value).toEqual('newkid');
  });

  it("should be able to run 'contains' on matching and non-matching values", function() {
    expect(tree.contains('newkid')).toEqual(true);
    expect(tree.contains('blah')).toEqual(false);
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  // Add more tests here to test the functionality of tree.
});