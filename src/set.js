var makeSet = function(){       // TRY TO SOLVE USING ARRAY
  this._storage = [];
  this._size = -1;
};

makeSet.prototype.add = function(addIn){
  if (!this.contains(addIn)) {
    this._size++;
    this._storage.push(addIn);
  }
  /*
  if (!this.contains(addIn)) {
    this._size++;
    this._storage[this._size] = addIn;
  }
  */
};

makeSet.prototype.contains = function(query){
  for (var index = 0; index < this._size; index++) {
    if (this._storage[index] === query) {
      return true;
    }
  }
  return false;
/*
  var found = false;
  for (var key in this._storage) {
  	if (this._storage[key] === query) {
  	  found = true;
  	}
  }
  return found;
*/
};

// WAS IN THE MIDDLE OF CLEANING THIS UP, THEN PULLED AWAY FOR A BREAKOUT TO TALK ABOUT 
// PRE-COURSE MESSAGING

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