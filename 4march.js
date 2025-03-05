class ListNode {
    constructor(val = 0, next = null) {                                         // Q-1
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }
    
    return dummy.next;
}

function printList(node) {
    let result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join(' -> '));
}

let l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
let l2 = new ListNode(2, new ListNode(4, new ListNode(6)));

let mergedList = mergeTwoLists(l1, l2);
printList(mergedList);









class Node {
    constructor(data) {                                                 // Q-2
        this.data = data;
        this.next = null;
    }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

let head = a;
let n = 2; 

let dummy = new Node(0);
dummy.next = head;
let first = dummy;
let second = dummy;

for (let i = 0; i <= n; i++) {
    first = first.next;
}

while (first !== null) {
    first = first.next;
    second = second.next;
}

second.next = second.next.next;

head = dummy.next;

let current = head;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}













































