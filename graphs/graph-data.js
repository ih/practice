// nodes - 0, 1, >1
// edges - 0, 1, >1
// connectedness - disconnected, connected components ,completely connected
// cycles - acyclic, cyclic
// directed - true, false
// node degree - 0, 1, >1
var emptyGraph = {};
var oneNode = {a: []};
var twoNodesDisconnected = {a: [], b: []};
var twoNodesConnected = {a: ['b'], b: []};
var threeNodesCycle = {a: ['b'], b: ['c'], c: ['a']};
var fourNodesTree = {a: ['b'], b: ['c', 'd'], c: ['d'], d: []};
