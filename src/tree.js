var makeTree = function(){
  var newTree = {};
  extend(treeMethods, newTree);
  newTree.value = 'replace this';
  newTree.children = []; // contains subtrees
  return newTree;
};

var extend = function(from, to) {
  for (var key in from) {
  	to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(childVal){
  var newnode = makeNode(childVal);
  this.children.push(newnode);
};

//treeMethods.


/*
var makeNode = function(nodevalue) {
  var node = {};
  node.value = nodevalue;
  return node;
}

treeMethods.contains = function(contVal){
  //var found = false;
  var checkfunc = function(checknode) { // recursive function
    if (checknode.value === contVal) { 	// check for match
      return true;
    }
    if (checknode.children) {			// if there're children, run checkfunc for each child
      for (var childIndex = 0; childIndex < checknode.children.length; childIndex++) {
        debugger
        return false || checkfunc(checknode.children[childIndex]);
      }
    }
    return false;
  }
  checkfunc(this); // initial call to run on the newTree object
};
*/
