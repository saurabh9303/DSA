class Graph {
    constructor() {
        this.data = {}
    }
    addVertex(vertex) {
        if (!this.data[vertex]) {
            this.data[vertex] = []
        }
    }
    connectVertex(v1, v2) {
        if (!this.data[v1]) {
            this.addVertex(v1)
        }
        if (!this.data[v2]) {
            this.addVertex(v2)
        }
        this.data[v1].push(v2)
        this.data[v2].push(v1)
    }
}

let graph1 = new Graph()
graph1.addVertex("a")
graph1.addVertex("b")
graph1.addVertex("c")
graph1.addVertex("d")
graph1.connectVertex("a", "b")
graph1.connectVertex("g", "h")

console.log(graph1.data)

