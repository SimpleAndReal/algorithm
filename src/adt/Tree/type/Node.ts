export class Node<T>{
    value:T | null
    left: Node<T> |null
    right: Node<T> | null 

    constructor(value:T){
        if(!value){
            throw new Error("value can not be empty");
        }
        this.value = value;
        this.left = null;
        this.right = null;
    }
}