var makeTree = function(){
  var newTree = {};
  extend(treeMethods, newTree);
  newTree.value = undefined;
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

treeMethods.contains = function(input){
  if (this.value === input) {
    return true;
  } else if (this.children) {
    for (var child = 0; child < this.children.length; child++) {
      if (this.children[child].contains(input)) {
        return true;
      }
    }
    return false;
  }

};

// PREVIOUS VERSIONS:

/*
var found = false;
  if (this.value === input) {
    return true;
  } else if (this.children) {
    for (var child = 0; child < this.children.length; child++) {
      if (this.children[child].contains(input)) {
        found = true;
      }
    }
    return found;
  }

  if (this.children) {
    for (var child = 0; child < this.children.length; child++) {
      return this.children[child].value === input || this.children[child].contains(input);
    }
  } else {
    return this.value === input;
  }

  
  if (this.value && this.value === input) {
    return true;
  } else {
    if (this.children) {
      for (var child = 0; child < this.children.length; child++) {
        return this.children[child].contains(input);
      }
    }
  } 
  */ 

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
