import {Hash} from './adt/hash';
import { BanaryTree } from './adt/Tree/binarySearchTree'
const test = new Hash();
test.setValue("test1",1)
test.setValue("test1",2)
test.setValue("test12",3)
console.log(test.getValue("test1"))
console.log(test.getValue("test1"))
console.log(test.getValue("test12"))

let test2 = new BanaryTree<number>(1);
test2.insert(2);
test2.insert(5);
test2.insert(7);

console.log(test2)