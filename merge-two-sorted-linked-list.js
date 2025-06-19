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
        let ans = "";
        while (current) {
            ans = ans + current.value + " ";
            current = current.next;
        }
        console.log(ans)
    }

    sort() {
        let current1 = this.head;

        while (current1) {
            let current2 = current1.next;
            while (current2) {
                if (current2.value < current1.value) {
                    let temp = current1.value;
                    current1.value = current2.value;
                    current2.value = temp;
                }
                current2 = current2.next

            }
            current1 = current1.next;
        }
    }
}

function mergeLL(list1, list2, list3) {
    let curr1 = list1.head;
    let curr2 = list2.head;
    let curr3 = list3.head;

    while(curr1 && curr2) {
        if(curr1.value < curr2.value) {
            list3.insertInLinkedList(curr1.value);
            curr1 = curr1.next;
        } else {
            list3.insertInLinkedList(curr2.value);
            curr2 = curr2.next;
        }
    }
    while(curr1) {
        list3.insertInLinkedList(curr1.value);
        curr1 = curr1.next;
    }
    while(curr2) {
        list3.insertInLinkedList(curr2.value);
        curr2 = curr2.next;
    }
}

const ll1 = new LinkedList();
ll1.insertInLinkedList(10)
ll1.insertInLinkedList(5)
ll1.insertInLinkedList(30)
ll1.insertInLinkedList(20)
ll1.insertInLinkedList(25)

const ll2 = new LinkedList();
ll2.insertInLinkedList(1)
ll2.insertInLinkedList(2)
ll2.insertInLinkedList(4)
ll2.insertInLinkedList(5)
ll2.insertInLinkedList(3)

ll1.sort()
ll1.print();

ll2.sort()
ll2.print();

const ll3 = new LinkedList();
mergeLL(ll1,ll2,ll3);
ll3.print()

