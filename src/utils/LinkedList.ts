export class Node<T> {
  public readonly val: T;
  public next: Node<T> | null;

  constructor(value: T) {
    this.val = value;
    this.next = null;
  }
}

export abstract class LinkedList<T> {
  public head: Node<T>;
  public tail: Node<T>;
  public size: number;

  constructor(val: T) {
    this.head = new Node<T>(val);
    this.tail = this.head;
    this.size = 1;
  }

  protected addNode(val: T) {
    const newNode = new Node<T>(val);
    this.tail.next = newNode;
    this.tail = newNode;

    return ++this.size;
  }
}
