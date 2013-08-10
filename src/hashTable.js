var HashTable = function(){
  this._limit = 1;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){      // k = user's key, v = user's value
  var i = getIndexBelowMaxForKey(k, this._limit);  
  var result = this._storage.get(i) || [];
  result.push([k,v]);
  this._storage.set(i, result);
/*
  if (this._storage.get(i)) {               // old version
    var result = this._storage.get(i);
    result.push([k,v]);
    this._storage.set(i, result);
  } else {
    this._storage.set(i, [[k,v]]);  
  }
*/
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var silo = this._storage.get(i);
  for (var index = 0; index < silo.length; index++) {
    if (silo[index][0] === k) {
      result = silo.slice(index,index+1);
      return result[0][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k){  
  var i = getIndexBelowMaxForKey(k, this._limit);
  var silo = this._storage.get(i);
  if (silo) {
    for (var index = 0; index < silo.length; index++) {
      if (silo[index][0] === k) {
        result = silo.splice(index,1);
        this._storage.set(i, silo);    
        return result[0];
      }
    }
  }
  return undefined;
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you

/*

Only insert if 

*/

/*

HashTable contains {
  limit: 8
  _storage: { } // makeLimitedArray(8) output
  insert: fn
  retrieve: fn
  remove: fn
}

_storage: {    // object containing 3 fns, uses storage array
  get: 
  set:
  each: 
  var storage = [[hash%max, value], [hash%max, value]]
}

*/