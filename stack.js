class Stack {
    count = 0;
    storage = {};
    
    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.count == 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];

        delete this.storage[this.count];

        return result;
    }

    peek() {
        console.log(`Peek is: ${this.storage[this.count-1]}`);
    }

    size() {
        console.log(`Size: ${this.count}`);
    }

    display() {
        console.log(`Show stack: ${JSON.stringify(this.storage)}`);
    }
}

stackObj = new Stack();

stackObj.push(10);
stackObj.push(20);
stackObj.push(30);
stackObj.pop();
stackObj.peek();
stackObj.size();
stackObj.display();