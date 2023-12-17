export class MarkerNode<T> {
  public readonly location: T;
  public readonly quest_number: number;
  public next: MarkerNode<T> | null;
  public timestamp: string;

  constructor(val: T, quest_number: number, timestamp: string) {
    this.quest_number = quest_number;
    this.location = val;
    this.next = null;
    this.timestamp = timestamp;
  }
}
