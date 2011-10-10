function TodoList() {
    this.items = [];
}

TodoList.prototype.getCount = function() {
    return this.items.length;
};

TodoList.prototype.add = function(todoItem) {
    this.items.push(todoItem);
};

TodoList.prototype.asStringList = function() {
    var output = [];
    for (var i = 0; i < this.items.length; i++) {
        output.push(this.items[i].getTitle());
    }

    return output;
};