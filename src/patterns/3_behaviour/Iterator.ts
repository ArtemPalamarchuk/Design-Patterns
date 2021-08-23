interface IIterator {
  setNext: () => void,
  hasNext: () => boolean
}

class LinkedList implements IIterator {
  private readonly head = {
    data: 'head',
    index: 0,
    prev: null,
    next: null,
  }

  private currentNodeIndex = 0

  createNode(data) {
    let currentNode = this.head

    while (currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = {
      data,
      index: currentNode.index + 1,
      prev: currentNode,
      next: null
    }
  }

  setNext() {
    const currentNode = this.getCurrentNode()

    if (!currentNode.next) return

    this.currentNodeIndex++
  }

  hasNext() {
    return !!this.getCurrentNode().next
  }

  getCurrentNode() {
    let currentNode = this.head

    while (currentNode.index !== this.currentNodeIndex) {
      currentNode = currentNode.next
    }

    return currentNode
  }
}

const iterator = new LinkedList();



export const Iterator_Result = () => {
  console.log(iterator.getCurrentNode(), 'getCurrentNode');
  iterator.createNode('data 1');
  iterator.createNode('data 2');
  iterator.createNode('data 3');

  iterator.setNext();
  iterator.setNext();
  console.log(iterator.hasNext());
  iterator.setNext();
  iterator.setNext();

  console.log(iterator.getCurrentNode(), 'getCurrentNode');
}