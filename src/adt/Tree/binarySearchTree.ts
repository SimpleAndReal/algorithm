import { Node } from "./type/Node"
export class BanarySearchTree<T> {
    private root: Node<T> | null;
    private current_root: Node<T> | null;
    constructor(value: T) {
        if (!value) {
            throw new Error("value can not be empty");
        }
        this.root = new Node(value);
        this.current_root = this.root
    }

    insert(value: any) {
        return this.insertNode(this.current_root, value);
    }

    get(value: any) {
        return this.getNode(this.root, value);
    }

    remove(value: T) {
        this.removeNode(this.root, value);
    }

    protected insertNode(node: Node<T> | null, value: any): Node<T> | null {
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
        return node;
    }

    private getNode(node: Node<T> | null, value: T): Node<T> | null {
        if (node === null) {
            return null;
        }
        if (node.value == value) {
            return node;
        }
        if (node.value < value) {
            return this.getNode(node.right, value)
        }
        if (node.value > value) {
            return this.getNode(node.left, value)
        }
        return null;
    }

    private removeNode(node: Node<T> | null, value: T): Node<T> | null {
        if (node == null) {
            return null;
        }
        if (node.value < value) {
            node.left = this.removeNode(node.right, value);
            return node;
        } else if (node.value > value) {
            node.right = this.removeNode(node.left, value);
            return node;
        }
        else {
            if (node.left == null && node.right == null) {
                node = null;
                return node
            }

            if (node.left == null) {
                node = node.right;
                return node;
            }

            if (node.right === null) {
                node = node.left;
                return node
            }
            let minRightNode = this.getMinNode(node.right);
            node.value = minRightNode.value;
            node.right = this.removeNode(node.right, minRightNode.value);
            return node

        }


    }

    private getMinNode(node: Node<T>): Node<T> {
        let temp = node;
        while (node.left !== null) {
            temp = node.left;
            node = node.left;
        }
        return temp;

    }


}