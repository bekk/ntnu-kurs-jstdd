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
        output.push(this.items[i].toString());
    }

    return output;
};

TodoList.prototype.getTotalEstimate = function() {
	var sum = 0;
	for (var i = 0; i < this.items.length; i++){
		sum = ((sum* 100) + (this.items[i].getEstimate()*100))/100;
	}
	return sum;
};
