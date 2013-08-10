describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });
  
  it("should be able to add items using addtoTail without errors", function() {
    linkedList.addToTail('first');
    linkedList.addToTail('second');
    linkedList.addToTail('third');  
  });  
  
  it("should be able to add items using addToHead without errors", function() {
    linkedList.addToHead('first');
    linkedList.addToHead('second');
    linkedList.addToHead('third');    
  });

  it("should be able to check if an item is contained in the list", function() {
    linkedList.addToTail('first');
    expect(linkedList.contains('first')).toEqual(true);
  });

  it("should return the correct value when removing from head", function() {
    linkedList.addToTail('first');
    linkedList.addToTail('second');
    expect(linkedList.removeHead()).toEqual('first');
  });

  it("should return undefined if no items remain in list and trying to remove", function() {
    linkedList.addToTail('first');
    linkedList.addToTail('second');
    linkedList.removeHead();
    linkedList.removeHead();
    expect(linkedList.removeHead()).toEqual(undefined);
  });

  it("should return false if tries contain and item has not been added", function() {
    linkedList.addToTail('first');
    expect(linkedList.contains('second')).toEqual(null);
  });

  it("should return false if item has been removed", function() {
    linkedList.addToTail('first');
    linkedList.removeHead();
    expect(linkedList.contains('first')).toEqual(null);
  });

  it("items should have prev and next values", function() {
    linkedList.addToTail('first');
    linkedList.addToTail('second');
    expect(linkedList.tail.next.value).toEqual('first');
    expect(linkedList.head.prev.value).toEqual('second');
  });

  // add more tests here to test the functionality of linkedList
});