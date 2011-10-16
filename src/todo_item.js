function TodoItem (title) {
	this.title = title;
	this.finished = false;
}

TodoItem.FINISHED_PREFIX = "(X) ";
TodoItem.UNFINISHED_PREFIX = "( ) ";

TodoItem.prototype.getTitle = function() {
	return this.title;
};

TodoItem.prototype.isFinished = function() {
	return this.finished;
};

TodoItem.prototype.setFinished = function() {
	this.finished = true;
};

TodoItem.prototype.setUnfinished = function() {
	this.finished = false;
};

TodoItem.prototype.getPrefix = function() {
    if (this.finished) {
        return TodoItem.FINISHED_PREFIX;
    } else {
        return TodoItem.UNFINISHED_PREFIX;
    }
};

TodoItem.prototype.toString = function() {
    return this.getPrefix() + this.title;
};