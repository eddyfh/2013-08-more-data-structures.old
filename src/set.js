var makeSet = function(){     
  this._storage = [];
  this._size = -1;
};

makeSet.prototype.add = function(addIn){
  if (!this.contains(addIn)) {
    this._size++;
    this._storage.push(addIn);
  }

};

makeSet.prototype.contains = function(query){
  for (var index = 0; index < this._size; index++) {
    if (this._storage[index] === query) {
      return true;
    }
  }
  return false;
};

makeSet.prototype.remove = function(query){
  var result;
  for (var index = 0; index < this._storage.length; index++) {
    if (this._storage[index] === query) {
      result = [index, this._storage[index]];
      this._storage = this._storage.splice(index,1);
    }
  }
};

  /*
  if (!this.contains(addIn)) {
    this._size++;
    this._storage[this._size] = addIn;
  }
  */
/*
  var found = false;
  for (var key in this._storage) {
    if (this._storage[key] === query) {
      found = true;
    }
  }
  return found;
*/

/*
makeSet.prototype.remove = function(query){

  var results = this._storage
  var results = this._storage[this._size];
  if (this._size > 0) {
  	this._size--;
  }
  delete this._storage[this._size];
};
*/