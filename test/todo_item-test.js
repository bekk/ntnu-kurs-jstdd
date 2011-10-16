module("TodoItem");

test("has a title", function() {
	// Arrange - Sett opp variabler o.l.
	var title = "Møte opp og vekke studentene";
	
	// Act - Utfør handlingen som skal testes
	var todoItem = new TodoItem(title);
		
	// Assert - Verifiser at handlingen har gjort det den skal
	equals(todoItem.getTitle(), title);
});