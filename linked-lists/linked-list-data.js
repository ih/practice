class Node {

  constructor(data, next) {
    this.data = data;
    this.next = next ? next : null;
  }

}

// number of nodes - 0, 1, many
// circular - true/false
var nullNode = null;
var nodeC = new Node('c');
var nodeB = new Node('b', nodeC);
var nodeA = new Node('a', nodeB);
