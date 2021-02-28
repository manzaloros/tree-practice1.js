const Tree = require('./Tree')
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