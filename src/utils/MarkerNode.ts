export class MarkerNode<T> {
  public readonly location: T;
  public readonly quest_number: number;
  public next: MarkerNode<T> | null;

  constructor(val: T, quest_number: number) {
    this.quest_number = quest_number;
    this.location = val;
    this.next = null;
  }
}
