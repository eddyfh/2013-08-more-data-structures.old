var makeSet = function(){
  this._storage = {};
  this._size = -1;
};

makeSet.prototype.add = function(addIn){
  if (!this.contains(addIn)) {
    this._size++;
    this._storage[this._size] = addIn;
  }
};

makeSet.prototype.contains = function(query){
  var found = false;
  for (var key in this._storage) {
  	if (this._storage[key] === query) {
  	  found = true;
  	}
  }
  return found;
};

makeSet.prototype.remove = function(){
  var results = this._storage[this._size];
  if (this._size > 0) {
  	this._size--;
  }
  delete this._storage[this._size];
};
