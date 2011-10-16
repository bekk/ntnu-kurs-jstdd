function TodoItem (title) {
	this.title = title;
}

TodoItem.prototype.getTitle = function() {
	return this.title;
};
