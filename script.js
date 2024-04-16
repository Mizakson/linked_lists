// linked list project

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    append(value) {
        let node = new Node(value)
        let current

        if (this.head == null) {
            this.head = node
            this.length++
        } else {
            current = this.head
            while (current.nextNode) {
                current = current.nextNode
            }

            current.nextNode = node
        }

        this.length++

    }

    prepend(value) {
        this.head = new Node(value, this.head)
        this.length++
    }

    size() {
        return this.length
    }

    getListHead() {
        return this.head
    }

    getListTail() {
        let current

        if (this.head.nextNode == null) {
            return this.head
        } else {
            current = this.head
            while (current.nextNode) {
                current = current.nextNode
            }
            return current
        }
        
    }

    at(index) {
        let current = this.head
        let counter = 0

        while (current) {
            if (counter == index) {
                return current
            }
            counter++
            current = current.nextNode
        }
        return "VALUE DOESN'T EXIST YET"
    }

    pop() {
        let tail = this.at(this.length - 1)
        delete this[tail]
        this.length--
        return this
    }

    contains(value) {
        let current
        if (this.head.value === value) return true
        if (this.head.nextNode.value !== null) {
            current = this.head.nextNode
            if (current.value === value) return true
            else {
                while (current.nextNode) {
                    if (current.value === value) return true
                    current = current.nextNode
                }
                if (current.value === value) return true
            }
        }
        return false
    }

    find(value) {
        // initial check
        if (this.contains(value)) {
            let index = 0
            let current = this.head
            while (current) {
                if (current.value === value) {
                    return index
                }
                current = current.nextNode
                index++
            }
        }
        return null
    }

    toString() {
        let current = this.head

        let str = ""

        while (current) {
            str += ` (${current.value}) -> `
            current = current.nextNode
        }

        return str
        
    }

}


class Node {
    constructor(value = null, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}

var ll = new LinkedList()
ll.prepend(300)
ll.prepend(200)
ll.prepend(100)
ll.append(400)
// console.log(ll.getListHead())
// console.log(ll.getListTail())
// console.log(ll.at(1)) // 200
// console.log(ll.pop())
// console.log(ll.contains(100)) // true
// console.log(ll.contains(800)) // false
console.log(ll.find(100))
// console.log(ll.toString())