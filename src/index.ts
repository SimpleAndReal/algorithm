import {Hash} from './adt/hash'
const test = new Hash();
test.setValue("zhanglei",1)
test.setValue("zhanglei11",2)
test.setValue("zhanglei11",3)
console.log(test.getValue("zhanglei"))
console.log(test.getValue("zhanglei11"))
console.log(test.getValue("zhanglei11"))