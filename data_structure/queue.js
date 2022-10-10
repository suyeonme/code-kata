class Queue {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  enqueue(element) {
    this.items[this.size] = element;
    this.size++;
    return element;
  }

  dequeue() {
    if (this.size === 0) {
      throw new Error('Stack is empty.');
    } else {
      this.items = this.items.slice(1);
      this.size--;
      return this.items;
    }
  }

  front() {
    if (this.size === 0) {
      throw new Error('Queue is empty.');
    } else {
      return this.items[0];
    }
  }

  isEmpty() {
    if (this.size === 0) {
      throw new Error('Queue is empty.');
    } else {
      return this.size === 0;
    }
  }

  clear() {
    this.size = 0;
    this.items = [];
  }

  length() {
    return this.size;
  }

  print() {
    return this.items;
  }
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue.print())