import { BanarySearchTree } from "./binarySearchTree";
import { Node } from "./type/Node"
export class AvlTree<T> extends BanarySearchTree<T> {

    constructor(value: T) {
        super(value);
    }

    getNodeHeight(node: Node<T> | null): number {
        if (node == null) {
            return -1;
        }
        else {
            return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.left)) + 1
        }
    }

    // result ->  0 1 2 -2  | 2-> left hight  |  -2->rirght heigh
    getBalanceFactor(node: Node<T>): number {
        const height = this.getNodeHeight(node?.left) - this.getNodeHeight(node?.right);
        return height;
    }

    // avl rotate

    //LL

    rotationLL(node: Node<T>): Node<T> | null {
        const temp = node.left;
        if (temp) {
            node.left = temp.right;
            temp.right = node;
        }
        return temp;
    }

    //RR
    rotationRR(node: Node<T>): Node<T> | null {
        const temp = node.right;
        if (temp) {
            node.right = temp.left
            temp.left = node;
        }
        return temp;
    }
    //LR
    rotationLR(node: Node<T>) {
        if (node.left) {
            node.left = this.rotationRR(node.left);
        }
        return this.rotationLL(node);
    }

    //RL
    rotationRL(node: Node<T>){
        if (node.left) {
            node.left = this.rotationLL(node.left);
        }
        return this.rotationRR(node);
    }

}