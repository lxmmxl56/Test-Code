'use strict';

import {dLinkedNode, dLinkedList} from './doubleLinked.js';

export class deque extends dLinkedList {
  toString(name='deque') {
    return super.toString(name);
  }
  enqueueHead(value) {
    const node = new dLinkedNode(value);
    return this.prepend(node);
  }
  enqueueTail(value) {
    const node = new dLinkedNode(value);
    return this.append(node);
  }
  dequeueHead() {
    if (this.head) {
      const value = this.head.value;
      this.remove(value);
      return value;
    }
    return null;
  }
  dequeueTail() {
    if (this.tail) {
      const value = this.tail.value;
      this.remove(value, true);
      return value;
    }
    return null;
  }
  peekHead() {
    if (this.head) {
      return this.head.value;
    }
    return null;
  }
  peekTail() {
    if (this.tail) {
      return this.tail.value;
    }
    return null;
  }
}

export class queue extends deque {
  toString() {
    return super.toString('queue');
  }
  enqueue(value) {
    return this.enqueueTail(value);
  }
  dequeue() {
    return this.dequeueHead();
  }
  peek() {
    return this.peekHead();
  }
}

export class stack extends deque {
  toString() {
    return super.toString('stack');
  }
  push(value) {
    return this.enqueueHead(value);
  }
  pop() {
    return this.dequeueHead();
  }
  peek() {
    return this.peekHead();
  }
}
