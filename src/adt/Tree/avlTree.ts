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

    insertNode(node: Node<T> | null, value: any): Node<T> | null {
        if (node == null) {
            return new Node(value);
        }
        if (node.value == value) {
            throw new Error("value exist")
        }
        if (node.value < value) {
            node.left = this.insertNode(node.left, value);
        }
        if (node.value > value) {
            node.right = this.insertNode(node.right, value);

        }
        const balanceFactor = this.getBalanceFactor(node)
        if (balanceFactor == 2) {
            if (node.left) {
                if (this.getBalanceFactor(node.left) == -1) {
                    this.rotationLR(node)
                } else {
                    this.rotationLL(node);
                }
            }

        }
        if (balanceFactor == -2) {
            if (node.right) {
                if (this.getBalanceFactor(node.right) == 1) {
                    this.rotationRL(node)
                } else {
                    this.rotationRR(node);
                }
            }

        }
        return node;
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
    rotationRL(node: Node<T>) {
        if (node.left) {
            node.left = this.rotationLL(node.left);
        }
        return this.rotationRR(node);
    }

}