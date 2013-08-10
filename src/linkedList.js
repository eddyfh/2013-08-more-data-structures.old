// Note: don't use an array to do this.
/* HEAD HAS OLDEST ITEMS - DOES NOT POINT TO ANYTHING
TAIL HAS NEWEST ITEMS - POINTS TO PREV OLDEST ITEM*/

var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(input){
    var newnode = makeNode(input);  // creates new node object with input = value
    if (list.tail) {                // if there are already nodes
      var oldtail = list.tail;
      oldtail.prev = newnode;
      newnode.next = oldtail;
    } else {
      list.head = newnode;
    }
    list.tail = newnode;
  };

  list.addToHead = function(input) {
    var newnode = makeNode(input);
    if (list.tail) {
      var oldhead = list.head;
      oldhead.next = newnode;
      newnode.prev = oldhead;
    } else {
      list.tail = newnode;
    }
    list.head = newnode;
  };

  list.removeHead = function(){
    if (list.head) {                    // if there's already nodes
      var result = list.head;
      if (list.head.prev) {             // if there're multiple nodes
        list.head = list.head.prev;
        list.head.next = null; 
      } else {                          // single nodes
        list.head = null;
        list.tail = null;
      }
      return result.value;
    }
    return undefined;
  };

  list.removeTail = function() {
    if (list.tail) {
      var result = list.tail;
      if (list.tail.next) {
        list.tail = list.tail.next;
        list.tail.prev = null;
      } else {
        list.tail = null;
        list.head = null;
      }
      return result.value;
    }
    return undefined;
  };

  list.contains = function(input) {
    return list.tail && list.tail.contains(input);  
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;

  node.contains = function(value) {
    return node.value === value || node.next && node.next.contains(value);
  };

  return node;
};


/* OLD IMPLEMENTATION OF CONTAINS & node
  list.contains = function(input){   
    var found = false;
    var check = function(checknode) {  
      if (checknode.value === input) {
        found = true;
      } else if (checknode.next){
        check(checknode.next);
      } 
    };
    if (list.tail) {
      check(list.tail);
    }
    return found;
  };

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;
  return node;
};

  */

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