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
