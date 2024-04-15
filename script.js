// linked list project

class LinkedList {
    constructor() {
        this.list = []
    }


    append(value) {
        this.list.push(value)
    }


    prepend(value) {
        this.list.unshift(value)
    }


    size() {
        return this.list.length
    }


    head() {
        return this.list[0]
    }


    at(index) {
        return this.list[index]
    }


    pop() {
        this.list.pop()
        return this.list
    }


    contains(value) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].value === value) return true
            else {
                return false
            }
        }
    }


    find(value) {
        return null
    }

}


class Node {
    constructor(value, nextNode) {
        this.value = null
        this.nextNode = null
    }


    getValue() {
        return this.value
    } 

    
    setValue(value) {
        this.value = value
        return this.value
    }


    getNextNode() {
        return this.nextNode
    }


    setNextNode(nextNode) {
        this.nextNode = nextNode
        return this.nextNode
    }

}


let test = new LinkedList()

let node1 = new Node()
node1.setValue(3)

let node2 = new Node()
node2.setValue(6)

let node3 = new Node()
node3.setValue(9)

test.append(node1)
test.append(node2)
test.append(node3)
node1.setNextNode(node2.value)
node2.setNextNode(node3.value)

console.log(test.list)