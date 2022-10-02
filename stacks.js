//implement a stack in javascript
//Creates a stack
var Stack = function() {
    this.count = 0;
    this.storage = {}; //empty object

    // adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    //remove and return the value at the END of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];  
        delete this.storage[this.count];
        return result;
    }

    this.size = function() {
        return this.count;
    }

    //returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count - 1];
    }

}

var myStack = new Stack();

myStack.push("iron");
myStack.push("maiden");
myStack.push("rocks");
console.log(myStack.size())
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size())