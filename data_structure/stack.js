class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  push(element) {
    this.items[this.size] = element;
    this.size++;
    return element;
  }

  pop() {
    if (this.size === 0) {
      throw new Error('Stack is empty.');
    } else {
      this.items = this.items.slice(0, this.size - 1);
      this.size--;
      return this.items;
    }
  }

  peek() {
    return this.items[this.size - 1];
  }

  isEmpty() {
    return this.size === 0;
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

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
console.log(stack.print());
console.log(stack.length());
