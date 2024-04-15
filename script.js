// linked list project

class LinkedList {
    // if head is not initialized, head = null
    constructor(head = null) {
        this.head = head
    }

    append(value) {

    }


    prepend(value) {

    }


    size() {
        let counter = 0
        let node = this.head

        while (node) {
            counter++
            node = node.nextNode
        }

        return counter

    }


    getHead() {
        return this.head
    }


    tail() {

    }


    at(index) {

    }


    pop() {

    }


    contains(value) {

    }


    find(value) {

    }


    toString() {

    }

    /* 
    EXTRA CREDIT
    
    insertAt(value, index) {

    }

    removeAt(index) {

    }

    */

}


class Node {
    constructor(value) {
        this.value = null
        this.nextNode = null
    }
}