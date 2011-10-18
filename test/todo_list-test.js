module("TodoList", {
    setup: function() {
        this.list = new TodoList();
    }
});

test("has 0 items after being created", function() {
    equal(this.list.getCount(), 0);
});

test("has 1 item after adding a todo item", function() {
    this.list.add(new TodoItem("Bestille pizza"));
    equal(this.list.getCount(), 1);
});


module("Pretty printing: TodoList", {
    setup: function() {
        this.list = new TodoList();
    }
});

test("with 1 item returns that item in the output", function() {
    this.list.add(new TodoItem("Snakke litt"));

    var output = this.list.asFormattedList();

    ok( output.contains("Snakke litt") );
});

test("with multiple items returns all items in the output", function() {
    this.list.add(new TodoItem("Snakke litt"));
    this.list.add(new TodoItem("Kode litt"));

    var output = this.list.asFormattedList();
    console.log(output);

    ok( output.contains("Snakke litt") );
    ok( output.contains("Kode litt") );
});

test("with one unfinished item should start with unfinished prefix", function() {
    // Arrange
    this.list.add(new TodoItem("Unfinished business"));

    // Act
    var output = this.list.asFormattedList();
    console.log(output);

    // Assert
    ok( output.startsWith(TodoItem.UNFINISHED_PREFIX) );
});


test("with one finished item should start with finished prefix", function() {
    // Arrange
    var finishedItem = new TodoItem("Jodle på flyet til Trondheim");
    finishedItem.setFinished();
    this.list.add(finishedItem);

    // Act
    var output = this.list.asFormattedList();
    console.log(output);

    // Assert
    ok( output.startsWith(TodoItem.FINISHED_PREFIX) );
});

module("Estimates: TodoList");

test("with no items has an estimate of 0", function() {
    var list = new TodoList();
    equal(list.getTotalEstimate(), 0);
});

test("with 1 items with an estimate of 42 return a total sum of 42", function() {
    var theAnswer = new TodoItem("Fourty-two");
	theAnswer.setEstimate("42");

    var list = new TodoList();
    list.add(theAnswer);
    equal(list.getTotalEstimate(), 42);
});

test("should return a totalt sum of all estimates", function() {
	var firstItem = new TodoItem("Snakke litt mer");
	firstItem.setEstimate("2.1");
	var secondItem = new TodoItem("Kode litt mer");
	secondItem.setEstimate("2.2");
	
	var list = new TodoList();
    list.add(firstItem);
    list.add(secondItem);
	
	equal(list.getTotalEstimate(), 4.3);
});

