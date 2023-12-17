import { Node } from "../../utils/DefaultNode";
import { MarkerNode } from "../../utils/MarkerNode";

export type TNode<T> = Node<T> | MarkerNode<T>;
