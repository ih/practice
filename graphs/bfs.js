function bfsIterative(graph, start) {
  if (!start) {
    return false;
  }
  var queue = [start];
  var queued = {};
  queued[start] = true;
  while (queue.length > 0) {
    var current = queue.shift();
    console.log(current);
    var neighborsUnqueued = graph[current].filter(function (node) {
      var unqueued = queue.indexOf(node) === -1 && !(node in queued);
      if (unqueued) {
        queued[node] = true;
      }
      return unqueued;
    });
    queue = queue.concat(neighborsUnqueued);
    console.log(queue);
  }
}
console.log('-----');
bfsIterative(emptyGraph, null);
console.log('-----');
bfsIterative(oneNode, 'a');
console.log('-----');
bfsIterative(twoNodesDisconnected, 'a');
console.log('-----');
bfsIterative(fourNodesTree, 'a');
console.log('-----');
bfsIterative(threeNodesCycle, 'a');
