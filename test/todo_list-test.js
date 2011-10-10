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

test("should output a simple list with all todo items", function() {
    this.list.add(new TodoItem("Snakke litt"));
    this.list.add(new TodoItem("Kode litt"));

    var stringList = this.list.asStringList();

    equals(stringList[0], "Snakke litt");
    equals(stringList[1], "Kode litt");
});