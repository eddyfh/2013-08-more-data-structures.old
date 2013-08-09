var makeSet = function(){
  var set = Object.create(setPrototype); // fix me  ?????????
  set._storage = {};
  set._size = -1;
  return set;
};

var setPrototype = {};

setPrototype.add = function(addIn){
  if (!this.contains(addIn)) {
    this._size++;
    this._storage[this._size] = addIn;
  }
};

setPrototype.contains = function(query){
  var found = false;
  for (var key in this._storage) {
  	if (this._storage[key] === query) {
  	  found = true;
  	}
  }
  return found;
};

setPrototype.remove = function(){
  var results = this._storage[this._size];
  if (this._size > 0) {
  	this._size--;
  }
  delete this._storage[this._size];
};
