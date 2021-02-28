const Tree = function (val) {
  // Same as Object.assign()
  const instance = {...treeMethods}
  instance.children = [];
  instance.value = val

  return instance;
}

const treeMethods = {
  addChild: function(val) {
    const child = Tree(val);
    this.children.push(child)
  },

  contains: function(val) {
    let found = false;

    const recurse = (node) => {
      if (node.value === val) {
        found = true
        return;
      }

      node.children.forEach(child => recurse(child));
    }

    recurse(this);
    return found;
  }
}

module.exports = Tree;