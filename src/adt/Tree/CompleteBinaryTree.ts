import { Node } from "./type/Node";
import { Queue } from "../queue";
export class CompleteBinaryTree<T> {
    private root: Node<T> | null
    private queue: Queue<Node<T>>;

    constructor() {
        this.queue = new Queue<Node<T>>();
        this.root = null;
    }

    insert(value: T) {
        const newNode = new Node<T>(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            const node = this.queue.front();
            if (!node.left) {
                node.left = newNode;
            } else {
                node.right = newNode;
                this.queue.dequeue();
            }
        }
        this.queue.enqueue(newNode);
    }

    levelOrderTraversal(): T[] {
        let result: T[] = []
        let queue = new Queue<Node<T>>();
        if (this.root) {
            queue.enqueue(this.root)
            while (queue.size() > 0) {
                let node = queue.dequeue();
                if (node) {
                    result.push(node.value)
                }
                console.log(node);
                if (node?.left) {
                    queue.enqueue(node.left)
                }
                if (node?.right) {
                    queue.enqueue(node.right);
                }
            }
        }

        return result

    }

}