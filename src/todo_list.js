function TodoList() {
    this.items = [];
}

TodoList.prototype.getCount = function() {
    return this.items.length;
};

TodoList.prototype.add = function(todoItem) {
    this.items.push(todoItem);
};

TodoList.prototype.asFormattedList = function() {
    var output = "";
    for (var i = 0; i < this.items.length; i++) {
        output += this.items[i].toString();
        output += "\n";
    }

    return output;
};