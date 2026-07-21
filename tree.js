// Binary search tree (BST)

class Node {
    constructor(value) {
        {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }
}
class Tree {
    constructor() {
        this.root = null;

    }

    isTreeEmpty() {
        return this.root === null;
    }

    makeTree(value) {
        let newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }

        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    search(root, value) {
        if (root === null) {
            return false;
        } else if (root.value === value) {
            return true;
        } else if (root.value < value) {
            return this.search(root.right, value)
        } else {
            return this.search(root.left, value)
        }
    }
    BFSSearch() {
        let queue = []
        queue.push(this.root)
        // console.log(queue)
        while(queue.length){
            let current = queue.shift();
            // console.log(current)
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
            console.log(current.value)
        }

    }
    preOrder(root){
        // console.log(root)
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    minValue(root){
        if(!root.left){
            return root.value
        }else{
            return this.minValue(root.left)
        }
    }
    maxValue(root){
        if(!root.right){
            return root.value;
        }else{
            return this.maxValue(root.right)
        }
    }
}
let bst = new Tree();
bst.makeTree(20)
bst.makeTree(10)
bst.makeTree(5)
bst.makeTree(11)
bst.makeTree(30)
bst.makeTree(40)
bst.makeTree(23)
// console.log(bst.search(bst.root, 11))
// console.log(bst)
// bst.BFSSearch()
// bst.preOrder(bst.root)
// console.log(bst.minValue(bst.root))
// console.log(bst.maxValue(bst.root))