class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertInLinkedList(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const ll1 = new LinkedList();
ll1.insertInLinkedList(10)
ll1.insertInLinkedList(20)
ll1.insertInLinkedList(30)
ll1.insertInLinkedList(40)
ll1.insertInLinkedList(50)

ll1.print();