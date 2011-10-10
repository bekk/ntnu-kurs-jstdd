module("TodoList", {
    setup: function() {
        this.list = new TodoList();
    }
});

test("has 0 items after being created", function() {
    equals(this.list.getCount(), 0);
});

test("has 1 item after adding a todo item", function() {
    this.list.add(new TodoItem("Bestille pizza"));
    equals(this.list.getCount(), 1);
});

test("should output a list with all the todo items", function() {
    // Arrange
    var list = new TodoList();
    list.add(new TodoItem("Snakke litt"));
    list.add(new TodoItem("Kode litt"));

    var finishedItem = new TodoItem("Jodle på flyet til Trondheim");
    finishedItem.setFinished();
    list.add(finishedItem);

    // Act
    var stringList = list.asStringList();

    // Assert
    equals(stringList[0], TodoItem.UNFINISHED_PREFIX + "Snakke litt");
    equals(stringList[1], TodoItem.UNFINISHED_PREFIX + "Kode litt");
    equals(stringList[2], TodoItem.FINISHED_PREFIX + "Jodle på flyet til Trondheim");
});
