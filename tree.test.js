const Tree = require('./Tree')
const BST = require('./BinarySearchTree')

describe('tree class', () => {
  let tree = null;

  beforeEach(() => {
    tree = Tree('root');
  })

  it('has a .children property with addChild and contains methods', () => {
    expect(typeof tree.contains).toBe('function')
    expect(typeof tree.addChild).toBe('function')
    expect(Array.isArray(tree.children)).toBe(true)
  })

  it('should have an added child to it\'s children array', () => {
    tree.addChild('Anakin');
    tree.addChild('Skywalker');
    expect(tree.children[0].value).toBe('Anakin');
    expect(tree.children[1].value).toBe('Skywalker');
  })

  it('should return true for children that exist in the tree with contains', () => {
    expect(tree.contains('root')).toBe(true)
    expect(tree.contains('Hello')).toBe(false)
    tree.addChild('Hello');
    expect(tree.contains('Hello')).toBe(true)
    const child = tree.children[0];
    child.addChild('There');
    expect(tree.contains('There')).toBe(true)
  })
})

describe('binary search tree', () => {
  let bst = null;

  beforeEach(() => {
    bst = new BST(5);
  })

  it('should have .left, .right, insert(), contains(), and depthFirstLog() properties', () => {
    console.log(bst)
    expect(Object.prototype.hasOwnProperty.call(bst, 'left')).toBe(true)
    expect(Object.prototype.hasOwnProperty.call(bst, 'right')).toBe(true)
    expect(Object.prototype.hasOwnProperty.call(bst, 'insert')).toBe(true)
    expect(Object.prototype.hasOwnProperty.call(bst, 'contains')).toBe(true)
    expect(Object.prototype.hasOwnProperty.call(bst, 'depthFirstLog')).toBe(true)

    expect(typeof bst.insert).toBe('function')
    expect(typeof bst.contains).toBe('function')
    expect(typeof bst.depthFirstLog).toBe('function')
  })

  it('should add values to .right and .left according to their size', () => {
    bst.insert(4);
    bst.insert(6);
    expect(bst.left.value).toBe(4);
    expect(bst.right.value).toBe(6)

    bst.insert(3);
    bst.insert(7);
    expect(bst.left.left.value).toBe(3);
    expect(bst.right.right.value).toBe(7)
  })

  it('should report containing values to be found', () => {
    expect(bst.contains(5)).toBe(true)
    bst.insert(4);
    bst.insert(6);
    bst.insert(3);
    bst.insert(7);

    expect(bst.contains(4)).toBe(true);
    expect(bst.contains(6)).toBe(true);
    expect(bst.contains(3)).toBe(true);
    expect(bst.contains(7)).toBe(true);
  })

  it('should invoke DFL() for every child node', () => {
    const callback = jest.fn()
    bst.insert(4);
    bst.insert(6);
    bst.insert(3);
    bst.insert(7);
    bst.depthFirstLog(callback)
    expect(callback).toHaveBeenCalledTimes(5)
  })
})