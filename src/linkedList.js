// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(input){
    var newnode = makeNode(input);
    if (list.tail !== null) {
      list.tail.next = newnode;
      list.tail = newnode;
    }
    else {
      list.head = newnode;
      list.tail = newnode;
    }
  };

  list.removeHead = function(){
    if (list.head !== null) 
      list.head = list.head.next;
    if (list.head === null) 
      list.tail = null;
  };

  list.contains = function(){   
  };
  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};


/*

list is object
{
  head: (oldest) node 
  tail: (newest) node
  addToTail: fn
  removeHead: fn
  contains:   fn
  // function 
}

node object
{
  value: what's in it 'a'
  next: point to next node 
}

head: null
tail: null

add 1
head: firstnode
tail: firstnode

add 2
head: firstnode
tail: 2ndnode
// change firstnode to point to 2ndnode

*/