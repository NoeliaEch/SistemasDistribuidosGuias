class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head=null){
        this.head = head;
    }
    
}

LinkedList.prototype.add_beginning = function(value) {
    let newNodo = new Node(value);
    newNodo.next = this.head;


    this.head = newNodo;
    return this.head;
}

LinkedList.prototype.add_final = function(value) {
    let newNodo = new Node(value);

    if (this.head ===null) {
        this.head = newNodo;
    } else {

        let act = this.head;

        while(act.next) {
            act = act.next;
        }

        act.next = newNodo;
    }
}

LinkedList.prototype.show = function(){
    // muestra un nodo a la vez. Si la lista esta vacia, no muestra nada

    if (this.head!==null) {
        let act  = this.head;

        while (act!==null) {
            console.log(act.value);
            act = act.next;
        }
    }
}

LinkedList.prototype.add_ordered = function(value) {

    let newNodo = new Node(value);

    if (this.head===null || this.head.value < newNodo.value) {
        newNodo.next = this.head;
        this.head = newNodo;
    } else {
        let ant = null;
        let act = this.head;

        while (act && act.value > newNodo.value) {
            ant = act;
            act = act.next;
        }

        ant.next = newNodo;
        newNodo.next = act;
    }

    return this.head;
}


let arr = [15, 22, 16, 10, 29, 3, 4, 27, 20];

let LL = new LinkedList(); // inserto al inicio
let LL2 = new LinkedList(); // inserto al final
let LL3 = new LinkedList(); // inserto en orden descendente

arr.forEach(item => {
    LL.add_beginning(item);
})

arr.forEach(item => {
    LL2.add_final(item);
})

arr.forEach(item =>{
    LL3.add_ordered(item);
})


// inicio
console.log("-------------------------------");
console.log("Insercion al inicio");
LL.show();

console.log("-------------------------------");
console.log("Insercion al final");
LL2.show();

console.log("-------------------------------");
console.log("Insercion en orden descendente");
LL3.show();