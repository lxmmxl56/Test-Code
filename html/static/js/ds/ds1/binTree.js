'use strict';

export class bstNode {
  constructor(value, left=null, right=null) {
    this.data = value;
    this.left = left;
    this.right = right;
  }
  toString() {
    return `bstNode: ${this.data} left: ${this.left} right: ${this.right}`
  }
}

export class bsTree {
  constructor(node=null) {
    this.count = 0;
    if (node) {
      if (!(node instanceof bstNode)) {
        node = new bstNode(value);
      }
      this.root = node
      this.count++;
    } else {
      this.root = null;
    }
  }
  toString(name='binary searchValue tree') {
    return `${name}: ${this.count}`;
  }
  #doAdd(newNode, node) {
    if (null == node) {
      return true;
    } else {
      if (newNode.data < node.data) {
        const result = this.#doAdd(newNode, node.left);
        if (result) {
          node.left = newNode;
        }
      } else {
        const result = this.#doAdd(newNode, node.right);
        if (result) {
          node.right = newNode;
        }
      }
    }
  }
  add(value) {
    let node = value;
    if (!(node instanceof bstNode)) {
      node = new bstNode(value);
    }
    if (!this.root) {
      this.root = node;
    } else {
      this.#doAdd(node, this.root);
    }
    return ++this.count;
  }
  #doPreOrderTraversal(action, node) {
    if (node != null) {
      action(node.data);
      if (node.left) {
        console.log('/');
      }
      this.#doPreOrderTraversal(action, node.left);
      if (node.right) {
        console.log('\\');
      }
      this.#doPreOrderTraversal(action, node.right);
    }
  }
  preOrderTraversal(action) {
    this.#doPreOrderTraversal(action, this.root);
  }
  #doInOrderTraversal(action, node) {
    if (node != null) {
      this.#doInOrderTraversal(action, node.left);
      action(node.data);
      this.#doInOrderTraversal(action, node.right);
    }
  }
  inOrderTraversal(action) {
    this.#doInOrderTraversal(action, this.root);
  }
  #doPostOrderTraversal(action, node) {
    if (node != null) {
      this.#doPostOrderTraversal(action, node.left);
      this.#doPostOrderTraversal(action, node.right);
      action(node.data);
    }
  }
  postOrderTraversal(action) {
    this.#doPostOrderTraversal(action, this.root);
  }
  #doSearchValue(value, node, parent=null) {
    if (node) {
      if (value == node.data) {
        return {
          'found': true,
          'value': node.data,
          'node': node,
          'parent': parent
        }
      } else {
        const parent = node;
        if (value < node.data) {
          return this.#doSearchValue(value, node.left, parent);
        } else {
          return this.#doSearchValue(value, node.right, parent);
        }
      }
    }
    return {'found': false, 'value': null};
  }
  searchValue(value, node=false) {
    const result = this.#doSearchValue(value, this.root)
    if (node) {
      return result;
    }
    return result.value;
  }
  #doSearch(node, current) {
    if (current) {
      if (node.data == current.data) {
        return true;
      } else {
        if (node.data < current.data) {
          return this.#doSearch(node, current.left);
        } else {
          return this.#doSearch(node, current.right);
        }
      }
    }
    return false;
  }
  search(node) {
    return this.#doSearch(node, this.root)
  }
  checkRelation(node, relative) {
    if (this.#doSearch(node, this.root) && this.#doSearch(relative, this.root)) {
      return true;
    }
    return false
  }
  remove(value) {
    const result = this.searchValue(value, true);
    const found = result.found;
    if (found) {
      const toRemove = result.node;
      const parent = result.parent;
      if (!toRemove.right) {
        console.log('case 1');
        // If toRemove has no right child, then toRemove's left replaces toRemove
        if (!parent) {
          this.root = toRemove.left;
        } else {
          if (parent.data > toRemove.data) {
            // if parent value is greater than toRemove value
            // make the toRemove left child a left child of parent
            parent.left = toRemove.left;
          } else {
            // if parent value is less than toRemove value
            // make the toRemove left child a right child of parent
            parent.right = toRemove.left;
          }
        }
      } else if (!toRemove.right.left) {
        console.log('case 2');
        // If toRemove's right child has no left child, then toRemove's right child replaces toRemove
        toRemove.right.left = toRemove.left;
        if (!parent) {
          this.root = toRemove.right;
        } else {
          if (parent.data > toRemove.data) {
            // if parent value is greater than toRemove value
            // make the toRemove right child a left child of parent
            parent.left = toRemove.right;
          } else {
            // if parent value is less than toRemove value
            // make the toRemove right child a right child of parent
            parent.right = toRemove.right;
          }
        }
      } else {
        console.log('case 3');
        // If toRemove's right child has a left child, replace toRemove with toRemove's right child's left-most child
        // find the right's left-most child
        let leftmost = toRemove.right.left;
        let leftmostParent = toRemove.right;
        while (leftmost.left) {
          leftmostParent = leftmost;
          leftmost = leftmost.left;
        }
        // the parent's left subtree becomes the leftmost's right subtree
        leftmostParent.left = leftmost.right;
        // assign leftmost's left and right to toRemoves's left and right children
        leftmost.left = toRemove.left;
        leftmost.right = toRemove.right;
        if (!parent) {
          this.root = leftmost;
        } else {
          if (parent.data > toRemove.data) {
            // if parent value is greater than toRemove value
            // make leftmost the parent's left child
            parent.left = leftmost;
          } else {
            // if parent value is less than toRemove value
            // make leftmost the parent's right child
            parent.right = leftmost;
          }
        }
      }
      return --this.count;
    }
    return null;
  }
}
