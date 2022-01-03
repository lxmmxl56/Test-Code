'use strict';

export class dLinkedNode {
  constructor(value, prev=null, next=null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
  toString() {
    return `dLinkedNode:${this.value}`
  }
}

export class dLinkedList {
  constructor(node=null) {
    this.count = 0;
    if (node) {
      this.head = node;
      this.tail = node;
      this.count++;
    } else {
      this.head = null;
      this.tail = null;
    }
  }
  toString(name='dLinkedList') {
    let llString = `${name}:${this.count}\n`;
    let current = this.head;
    while (null != current) {
      llString += `- ${current}\n`;
      current = current.next;
    }
    return llString;
  }
  prepend(value) {
    let node = value;
    if (!(node instanceof dLinkedNode)) {
      node = new dLinkedNode(value);
    }
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
    if (!this.tail) {
      this.tail = this.head;
    }
    this.count++;
    return this.count;
  }
  append(value) {
    let node = value;
    if (!(node instanceof dLinkedNode)) {
      node = new dLinkedNode(value);
    }
    node.prev = this.tail;
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    if (!this.head) {
      this.head = this.tail;
    }
    this.count++;
    return this.count;
  }
  find(value, reverse=false) {
    if (reverse) {
      let current = this.tail;
      while (null != current) {
        if (value === current.value) {
          return current;
        }
        current = current.prev;
      }
    } else {
      let current = this.head;
      while (null != current) {
        if (value === current.value) {
          return current;
        }
        current = current.next;
      }
    }
    return null;
  }
  remove(value, reverse=false) {
    if (!this.count) {
      return false;
    }
    if (1 === this.count && value === this.head.value) {
      this.head = null;
      this.tail = null;
      this.count = 0;
      return true;
    }
    const foundNode = this.find(value, reverse);
    if (foundNode) {
      if (foundNode === this.head) {
        this.head = this.head.next;
        this.head.prev = null;
      } else if (foundNode === this.tail) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        foundNode.prev.next = foundNode.next;
        foundNode.next.prev = foundNode.prev;
      }
      this.count--;
      return true;
    }
    return false;
  }
  * enumerate(reverse=false) {
    if (reverse) {
      let current = this.tail;
      while (null != current) {
        yield current;
        current = current.prev;
      }
    } else {
      let current = this.head;
      while (null != current) {
        yield current;
        current = current.next;
      }
    }
  }
}

export class SortedLinkedList extends dLinkedList {
  toString() {
    return super.toString('sortedLinkedList');
  }
  add(value) {
    let node = value
    if (!(node instanceof dLinkedNode)) {
      node = new dLinkedNode(value);
    }
    if (!this.head || node.value < this.head.value) {
      this.prepend(node);
    } else if (node.value > this.tail.value) {
      this.append(node);
    } else {
      let insertBefore = this.head;
      while (insertBefore.value < node.value) {
        insertBefore = insertBefore.next;
      }
      node.next = insertBefore;
      node.prev = insertBefore.prev;
      insertBefore.prev.next = node;
      insertBefore.prev = node;
      this.count++;
      return this.count;
    }
  }
}
