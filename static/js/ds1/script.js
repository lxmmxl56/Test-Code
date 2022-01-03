'use strict';

// import {dLinkedNode, dLinkedList, SortedLinkedList} from './doubleLinked.js';
// import {deque, queue, stack} from './deque.js';
import {bstNode, bsTree} from './binTree.js';

console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('- BINARY NODES -')
console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
const rootNode = new bstNode('root');
const leftNode = new bstNode('left');
const rightNode = new bstNode('right');
rootNode.left = leftNode;
rootNode.right = rightNode;
const bt = new bsTree(rootNode);
console.log(rootNode.toString());
console.log(bt.toString());

console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('- BINARY TREE -')
console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
const bst = new bsTree();
console.log(bst.add(12));
console.log(bst.add(17));
console.log(bst.add(7));
console.log(bst.add(15));
console.log(bst.add(16));
console.log(bst.add(18));
console.log(bst.add(3));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('- PRE ORDER TRAVERSAL -')
console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
bst.preOrderTraversal(console.log);

// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// console.log('- IN ORDER TRAVERSAL -')
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// bst.inOrderTraversal(console.log);

// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// console.log('- POST ORDER TRAVERSAL -')
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// bst.postOrderTraversal(console.log);

// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// console.log('- SEARCH -')
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// console.log(bst.search(8));
// console.log(bst.search(3));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('- REMOVE -')
console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(bst.remove(17));
console.log(bst.toString());
bst.preOrderTraversal(console.log);
console.log(bst.remove(3));
console.log(bst.toString());
bst.preOrderTraversal(console.log);
console.log(bst.remove(12));
console.log(bst.toString());
bst.preOrderTraversal(console.log);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('- RELATIVE -')
console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
const node7 = bst.searchValue(7, true).node;
console.log(node7);
const node18 = bst.searchValue(18, true).node;
console.log(node18);
console.log(bst.checkRelation(node7, rootNode));
console.log(bst.checkRelation(node7, node18));

// function test(action, value) {
//   action(value);
// }

// test(console.log, 3);

// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// console.log('- DEQUE -')
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// const dq = new deque();

// dq.enqueueHead(0);
// console.log(dq.toString());
// dq.enqueueHead(1);
// console.log(dq.toString());
// dq.enqueueTail(2);
// console.log(dq.toString());
// dq.enqueueTail(3);
// console.log(dq.toString());
// console.log(dq.peekHead());
// console.log(dq.peekTail());
// console.log(dq.dequeueTail());
// console.log(dq.toString());
// console.log(dq.dequeueTail());
// console.log(dq.toString());
// console.log(dq.dequeueHead());
// console.log(dq.toString());
// console.log(dq.dequeueHead());
// console.log(dq.toString());

// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// console.log('- QUEUE -')
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// const myQ = new queue();
// console.log(myQ.enqueue(0));
// console.log(myQ.toString());
// console.log(myQ.enqueue(1));
// console.log(myQ.toString());
// console.log(myQ.enqueue(2));
// console.log(myQ.toString());
// console.log(myQ.enqueue(3));
// console.log(myQ.toString());
// console.log(myQ.dequeue());
// console.log(myQ.toString());
// console.log(myQ.dequeue());
// console.log(myQ.toString());
// console.log(myQ.dequeue());
// console.log(myQ.toString());
// console.log(myQ.dequeue());
// console.log(myQ.toString());

// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// console.log('- STACK -')
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// const myStack = new stack();
// console.log(myStack.push(0));
// console.log(myStack.toString());
// console.log(myStack.push(1));
// console.log(myStack.toString());
// console.log(myStack.push(2));
// console.log(myStack.toString());
// console.log(myStack.push(3));
// console.log(myStack.toString());
// console.log(myStack.pop());
// console.log(myStack.toString());
// console.log(myStack.pop());
// console.log(myStack.toString());
// console.log(myStack.pop());
// console.log(myStack.toString());
// console.log(myStack.pop());
// console.log(myStack.toString());

// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// console.log('- SORTED NUMBERS -')
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// const sllNum = new SortedLinkedList();
// console.log(sllNum.toString());
// sllNum.add(3);
// console.log(sllNum.toString());
// sllNum.add(2);
// console.log(sllNum.toString());
// sllNum.add(5);
// console.log(sllNum.toString());
// sllNum.add(4);
// console.log(sllNum.toString());
// sllNum.add(1);
// console.log(sllNum.toString());

// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// console.log('- SORTED STRINGS -')
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// const sllStr = new SortedLinkedList();
// console.log(sllStr.toString());
// sllStr.add('c');
// console.log(sllStr.toString());
// sllStr.add('b');
// console.log(sllStr.toString());
// sllStr.add('e');
// console.log(sllStr.toString());
// sllStr.add('d');
// console.log(sllStr.toString());
// sllStr.add('a');
// console.log(sllStr.toString());

// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// console.log('- CONSTRUCT -')
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// const node1 = new dLinkedNode(1);

// console.log(node1.toString());

// const node2 = new dLinkedNode(2);

// const dll0 = new dLinkedList();

// console.log(dll0.toString());

// const dll1 = new dLinkedList(node1);

// console.log(dll1.toString());

// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// console.log('- ADD -')
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// dll1.prepend(0);
// console.log(dll1.toString());
// dll1.append(node2);
// console.log(dll1.toString());

// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// console.log('- FIND -')
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// console.log(dll1.find(8));
// console.log(dll1.find(1));

// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// console.log('- ENUMERATE -')
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// const dll1Gen = dll1.enumerate();
// for (const node of dll1Gen) {
//   console.log(node.value);
// }
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// console.log('- REVERSE -')
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// const dll1GenR = dll1.enumerate(true);
// for (const node of dll1GenR) {
//   console.log(node.value);
// }

// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// console.log('- REMOVE -')
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
// console.log(dll0.remove((0)));
// console.log(dll1.remove((1)));
// console.log(dll1.toString());
// console.log(dll1.remove((2)));
// console.log(dll1.toString());
// console.log(dll1.remove((0)));
// console.log(dll1.toString());
