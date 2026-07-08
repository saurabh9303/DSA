class List {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.size = 1;
    }
    appendNode(nodeData) {
        let newNode = {
            value: nodeData,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode
        this.size++
    }
    traversing(value) {
        // console.log("Function called")
        let counter = 0;
        let currentNode = this.head
        while (counter < this.size) {
            // console.log(currentNode.value)
            if (counter === 2) {
                currentNode.value = value
                return;
            }
            currentNode = currentNode.next
            counter++
        }
        // console.log(list1)
    }
    deleteNode(index) {
        let counter = 1;
        let lead = this.head;
        if (index == 1) {
            this.head = this.head.next;
        } else {
            while (counter < index - 1) {
                lead = lead.next;
                counter++
            }
            let nextNode = lead.next.next;
            lead.next = nextNode
        }
    }
    insertNode(index, nodeData) {
        let newNode = {
            value: nodeData,
            next: null
        }
        let counter = 1
        let currentNode = this.head
        if (counter === index) {
            newNode.next = currentNode;
            this.head = newNode;
            this.size++
        } else if (index < 1 || index > this.size + 1) {
            console.warn("Invalid index")
        } else if (index === this.size + 1) {
            this.tail.next = newNode;
            this.tail = newNode;
            this.size++
        } else {
            while (counter < index - 1) {
                currentNode = currentNode.next;
                counter++
            }
            let tempNode = currentNode.next;
            currentNode.next = newNode;
            newNode.next = tempNode;
            this.size++
        }

    }
    searchNodeByValue(value) {
        let counter = 1
        let currentNode = this.head;
        while (counter <= this.size) {
            if (currentNode.value === value) {
                console.log(`Value found at node ${counter}`)
                return;
            }
            currentNode = currentNode.next;
            counter++
        }
        console.log(`Value not found`)
    }
    searchValuesByNode(node) {
        let counter = 1;
        let currentNode = this.head;
        if (node < 1 || node > this.size + 1) {
            console.log("invalid node")
        } else {
            while (counter <= this.size) {
                if (counter === node - 1) {
                    console.log(currentNode.next)
                    return;
                }
                currentNode = currentNode.next
                counter++
            }
        }


    }
}
let list1 = new List(200)
list1.appendNode(300)
list1.appendNode(400)
// list1.appendNode(500)
// list1.appendNode(600)
// list1.traversing(10000)
// list1.deleteNode(2)
list1.insertNode(10, 250)
list1.searchNodeByValue(300)
list1.searchValuesByNode(2)
console.log(list1)