var MinStack = function() {
    this.stack = [];
};

MinStack.prototype.push = function(x) {
    this.stack.push(x);
};

MinStack.prototype.pop = function() {
    this.stack.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    if (!this.stack)
        return 0;
    let min = this.stack[0];
    for (let i = 1; i < this.stack.length; i++)
        min = this.stack[i] < min ? this.stack[i] : min;
    return min;
};
