

// Use something like R.evolve to apply either transformations or just optional filters

var tomato  = {firstName: '  Tomato ', data: {elapsed: 20, remaining: 1400}, id:123};
var transformations = {
  firstName: R.trim,
  lastName: R.trim,
  data: {elapsed: function(x){
  	if(x>=45){
      return true;
    }else{
      return x;
    }
  }}
};
R.evolve(transformations, tomato);


// Example of morphing with full access to the original dataset for per-node calculations
// Note however that no new root nodes are possible
var tomato  = {firstName: '  Tomato ', data: {elapsed: 200, remaining: 1400}, id:123};

var morph = function(tree,shears){
  //var transformation = function(
  var transformation = shears(tree);
  return R.evolve(transformation, tree);
}



var shears = function(tree){
  var transformations = {
    firstName: function(x){
      return R.trim(x) + ":" + tree.id;
    },
    data: {
      elapsed: function(x){
        if(x>100){
          return { test:'more',test2: x+6 };
        }else{
          return x;
        }
      }
    }
  };
  return transformations;
};

morph(tomato, shears);


// Other things to be done with R.pick, maybe.
