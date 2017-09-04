function identity(arg) {
  return arg;
}

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function identityF(arg) {
  return function() {
    return arg;
  };
}

function addF(x) {
  return function(y) {
    return x + y;
  };
}

function liftF(binary) {
  return function(first) {
    return function(second) {
      return binary(first, second);
    };
  };
}

function curry(binary, first) {
  return function(second) {
    return binary(first, second);
  };
}

function curry2(binary, first) {
  return liftF(binary)(first);
}

function twice(binary) {
  return function(first) {
    return binary(first, first);
  };
}

function reverse(binary) {
  return function(first, second) {
    return binary(second, first);
  };
}

function reverse2(func) {
  return function(...args) {
    return func(...args.reverse());
  };
}

var doubl = twice(add);
var square = twice(mul);

//nested function invocations are inside out
function composeu(f, g) {
  return function(a) {
    return g(f(a));
  };
}

function composeb(f, g) {
  return function(a, b, c) {
    return g(f(a, b), c);
  };
}

function limit(binary, count) {
  return function(a, b) {
    if (count >= 1) {
      count -= 1;
      return binary(a, b);
    }
    return undefined;
  };
}

var add_ltd = limit(add, 1);

function from(start) {
  return function() {
    var next = start;
    start += 1;
    return next;
  };
}

function to(gen, end) {
  return function() {
    var value = gen();
    if (value < end) {
      return value;
    }
    return undefined;
  };
}

function fromTo(start, end) {
  return to(from(start), end);
}

function element(array, gen) {
  return function() {
    var index = gen();
    if (index !== undefined) {
      return array[index];
    }
  };
}

var index = to(from(1), 3);
console.log(index);
