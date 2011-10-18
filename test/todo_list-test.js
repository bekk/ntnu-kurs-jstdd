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
    var todoItem = new TodoItem("Snakke litt");
    this.list.add(todoItem);

    var output = this.list.asFormattedList();

    ok( output.startsWith(todoItem.toString()) );
});

test("with multiple items returns all items in the output", function() {
    var snakkeItem = new TodoItem("Snakke litt");
    var kodeItem = new TodoItem("Kode litt");

    this.list.add(snakkeItem);
    this.list.add(kodeItem);

    var output = this.list.asFormattedList();
    console.log(output);

    ok( output.contains(snakkeItem.toString()) );
    ok( output.contains(kodeItem.toString()) );
});