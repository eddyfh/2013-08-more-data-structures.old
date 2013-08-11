describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
    tree.addChild('newkid');
  });

  it("should be able to add a child", function() {
    expect(tree.children[0].value).toEqual('newkid');
    tree.addChild('newkid2');
    expect(tree.children[1].value).toEqual('newkid2');
  });

  it("should be able to run 'contains' on matching and non-matching values", function() {
    tree.addChild('newkid2');
    expect(tree.contains('newkid')).toEqual(true);
    expect(tree.contains('blah')).toEqual(false);    
    expect(tree.contains('newkid2')).toEqual(true);
    expect(tree.contains('blahblah')).toEqual(false);
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

});