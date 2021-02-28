const BST = function (val) {
  const instance = {};

  instance.value = val;
  instance.left = instance.right = null;

  instance.insert = function(val) {
    const child = BST(val);

    const recurse = (node) => {
      if (val < node.value && !node.left) {
        node.left = child;
        return
      } else if (val >= node.value && !node.right) {
        node.right = child
        return;
      }

      if (val < node.value) return recurse(node.left);
      if (val >= node.value) return recurse(node.right);
    }

    recurse(instance)
  }

  instance.contains = function(val) {
    let found = false;

    const recurse = (node) => {
      if (node.value === val) found = true;

      if (node.value > val && node.left) return recurse(node.left)
      if (node.value < val && node.right) return recurse(node.right)
    }

    recurse(instance);
    return found;
  }

  instance.depthFirstLog = function(cb) {
    const recurse = (node) => {
      cb(node.value);
      if (node.left) recurse(node.left)
      if (node.right) recurse(node.right)
    }

    recurse(instance);
  }

  return instance;
}

module.exports = BST;