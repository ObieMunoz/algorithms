function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;

    while (currentNode.next) {
        if (currentNode.value == currentNode.next.value) {
            currentNode.next = currentNode.next.next;
        } else currentNode = currentNode.next;
    }

    return linkedList
}