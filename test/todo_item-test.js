module("TodoItem");

test("has a title", function() {
	// Arrange - Sett opp variabler o.l.
	var title = "Møte opp og vekke studentene";
	
	// Act - Utfør handlingen som skal testes
	var todoItem = new TodoItem(title);
		
	// Assert - Verifiser at handlingen har gjort det den skal
	equals(todoItem.getTitle(), title);
});


module("Testing finishing: TodoItem", {
	setup: function() {
		this.todoItem = new TodoItem("Finne ut hva dagens ungdom liker");
	}
});

test("is not marked as finished by default (when created)", function() {
	equals(this.todoItem.isFinished(), false);
});

test("can be marked as finished", function() {
	this.todoItem.setFinished();
	
	ok(this.todoItem.isFinished());	
});

test("that is finished can be marked as unfinished", function() {
	this.todoItem.setFinished();
	this.todoItem.setUnfinished();
	
	equals(this.todoItem.isFinished(), false);
});


module("Printing: TodoItem",{
	setup: function() {
		this.todoItem = new TodoItem("Stappe studentene fulle av gratis mat");
	}
});

test("indicates if the item is finished", function() {
    this.todoItem.setFinished();

    equals(this.todoItem.toString(), TodoItem.FINISHED_PREFIX + "Stappe studentene fulle av gratis mat");
});

test("indicates if the item is unfinished", function() {
    equals(this.todoItem.toString(), TodoItem.UNFINISHED_PREFIX + "Stappe studentene fulle av gratis mat");
});
