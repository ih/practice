function deleteElement(linkedList, data) {
  var leader = linkedList;
  var follower = null;
  while(leader) {
    if (leader.data === data) {
      if (follower) {
        follower.next = leader.next;
      } else {
        linkedList = leader.next;
      }
      break;
    }
    follower = leader;
    leader = leader.next;
  }
}

function printList(linkedList) {
  while (linkedList) {
    console.log(linkedList.data);
    linkedList = linkedList.next;
  }
}

var ll = nodeA;
printList(ll);
deleteElement(ll, 'c');
printList(ll);
