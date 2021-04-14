class ListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	  // this.prev = null; - for doubly-linked lists
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	// all our methods go here:
	// addToFront(value)
	// create a new node with the given value and make it
	// the head of the list
	addToFront(value) {
		var new_node = new ListNode(value);

		if (this.head == null) {
			this.head = new_node;
			this.tail = new_node;
		}
		
		else {
			new_node.next = this.head;
			this.head = new_node;
		}
	}

	// addToBack(value)
	// create a new node with the given value and make it
	// the new tail of the list
	addToBack(value) {
		var new_node = new ListNode(value);

		if (this.head == null) {
			this.head = new_node;
			this.tail = new_node;
		}

		else {
			this.tail.next = new_node;
			this.tail = new_node;
		}
	}

	// display()
	// return a string with the value of every node from the
	// linked list - like "3 - 7 - 13 - 4 - 8"
	display() {

		if (this.head == null) {
			return null;
		}

		var output = this.head.value;
		var runner = this.head.next;

		while (runner != null) {
			output += " - " + runner.value;
			runner = runner.next;
		}

		return output;
	}

	// contains(target)
	// return true if the linked list contains a node with the
	// given value and false otherwise
	contains(target) {
		var runner = this.head;

		while (runner != null) {
			if (runner.value == target) {
				return true;
			}
			runner = runner.next;
		}
		return false;
	}

	moveMinToFront() {
		var runner = this.head;
		var min = this.head.value;
		var track_prev = this.head.value;
		var min_node = this.head;
		var previous = this.head;
	
		while (runner != null) {
			if (runner.value < min) {
				min = runner.value;
				min_node = runner;
				previous = track_prev;
			} 
			else {
				track_prev = runner;
			}
			runner = runner.next;
		}
		// Check if head is the same as lowest value (only 1 value)
		if (this.head == min_node) {
			return null;
		}

		previous.next = previous.next.next;
		min_node.next = this.head;
		this.head = min_node;
	}

	moveMaxToBack() {
		var runner = this.head;
		var max = this.head.value;
		var max_node = this.head;
		var previous = this.head;
		var track_prev = this.head.value;
	
		while (runner != null) {
			if (runner.value > max) {
				max = runner.value;
				max_node = runner;
				previous = track_prev;
			}
			else {
				track_prev = runner;
			}
			runner = runner.next;
		}
		
		previous.next = max_node.next;
		max_node.next = null;
		this.tail.next = max_node;
		}
}

// moveMaxToBack()
// as above, but find the node with the largest value and make it the tail
// if your linked list has nodes of values 3 - 7 - 21 - 2 - 11 - 9
// after calling this method, it should be in this order:
// 3 - 7 - 2 - 11 - 9 - 21


var new_SLL = new SinglyLinkedList();
new_SLL.addToBack(3);
new_SLL.addToFront(21);
new_SLL.addToFront(7897);
new_SLL.addToFront(3);
new_SLL.addToBack(2);
console.log(new_SLL.display());
new_SLL.moveMinToFront();
// new_SLL.moveMaxToBack();
console.log(new_SLL.display());
// console.log(new_SLL.contains(7));