// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// // const n1 = new Node(100);
// // console.log(n1)

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   // Insert first node
//   insertFirst(value) {
//     this.head = new Node(value, this.head);
//     this.size++;
//   }

//   // Insert last node
//   insertLast(value) {
//     let node = new Node(value);
//     let current;

//     // if empty, make head
//     if (!this.head) {
//       this.head = node;
//     } else {
//       current = this.head;

//       while (current.next) {
//         current = current.next;
//       }

//       current.next = node;
//     }

//     this.size++;
//   }
//   // Insert at index
//   InsertAt(value, index) {
//     // If index is out of range
//     if (index > 0 && index > this.size) {
//       return;
//     }

//     // If first index
//     if (index === 0) {
//       this.head = new Node(value, this.head);
//       return;
//     }

//     const node = new Node(value);

//     let current, previous;

//     // Set Current to first
//     current = this.head;
//     let count = 0;

//     while (count < index) {
//       previous = current; // Node before index
//       count++;
//       current = current.next; // Node after index
//     }
//     node.next = current;
//     previous.next = node;

//     this.size++;
//   }

//   // Get at index
//   getAt(index) {
//     let current = this.head;
//     let count = 0;

//     while (current) {
//       if (count == index) {
//         console.log(current.data);
//       }
//       count++;
//       current = current.next;
//     }

//     return null;
//   }

//   // Remove at index
//   removeAt(index) {
//     if (index > 0 && index > this.size) {
//       return;
//     }

//     let current = this.head;
//     let previous;
//     let count = 0;

//     // Remove first
//     if (index === 0) {
//       this.head = current.next;
//     } else {
//       while (count < index ) {
//         count++;
//         previous = current;
//         current = current.next;
//       }

//       previous.next = current.next;
//     }
//     this.size--;
//   }
//   // Clear list
//   clearList(){
//     this.head = null;
//     this.size = 0;
//   }

//   // Print List data
//   printListData() {
//     let current = this.head;
//     if(this.size == 0 ){
//       console.log('list is empty');
//     }
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// const ll = new LinkedList();

// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertLast(400);
// //ll.InsertAt(500,1)
// ll.printListData();
// console.log('------');
// ll.getAt(2);
// console.log('------');

// ll.removeAt(2);
// ll.printListData();
// console.log('------');
// ll.removeAt(22);
// ll.printListData();
// console.log('------');
// ll.clearList()
// ll.printListData();

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    // this._head = new Node(null);
    this.head = null;
  }

  insert_node_to_tail(node) {
    this.tail().next = node;
  }

  insert_node_to_head(value) {
    this.head = new Node(value, this.head);

    //this._head.next = node;
  }

  is_empty() {
    return this._head.next === null;
  }

  // head() {
  //   return this._head.next;
  // }

  tail() {
    let pointer = this._head;
    while (pointer.next) {
      pointer = pointer.next;
    }

    return pointer;
  }
  printListData() {
    let current = this.head;
    if (this.size == 0) {
      console.log("list is empty");
    }
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new MyLinkedList();
//ll.insert_node_to_tail(100);

ll.insert_node_to_head(200);
ll.insert_node_to_head(2);
ll.printListData();
//ll.insert_node_to_head(200);
//ll.insert_node_to_tail(100);
