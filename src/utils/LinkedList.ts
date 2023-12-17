import { TNode } from "../components/types/NodeType";

export abstract class LinkedList<T> {
  public head: TNode<T> | null;
  public tail: TNode<T> | null;
  public size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  protected addNode(newNode: TNode<T>) {
    if (!this.size) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    return ++this.size;
  }
}
