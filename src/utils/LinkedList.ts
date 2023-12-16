export class Node<T> {
  public readonly val: T;
  public next: Node<T> | null;

  constructor(value: T) {
    this.val = value;
    this.next = null;
  }
}

export abstract class LinkedList<T> {
  public head: Node<T> | null;
  public tail: Node<T> | null;
  public size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  protected addNode(val: T) {
    if (!this.size) {
      this.head = new Node<T>(val);
      this.tail = this.head;
    } else {
      const newNode = new Node<T>(val);
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    return ++this.size;
  }
}
