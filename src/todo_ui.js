$(function() { // jQuery's onDocumentReady - Loads when the DOM is ready

    // Denne gjør listen tilgjengelig i konsollen og muliggjør litt eksperimentering
    window.todoList = new TodoList();

    // Her er de forskjjellige DOM-elementene vi ønsker en referanse til
    var listElement = $("ul"),
        inputField = $("#inputRow > input"),
        addButton = $("#addButton");

    // Her legger vi til to "event-handlers" som håndterer både klikk på knappen "Legg til"
    // og at brukeren trykker ENTER i tekstfeltet.
    addButton.click(addItemHandler);

    inputField.keypress(function(e) {
        var isReturnKey = (e.which == 13);
        if (isReturnKey) {
            addItemHandler();
        }
    });


    function addItemHandler() {
        // Hent ut det som står i tekstfeltet
        var itemDescription = inputField.val();

        // Ikke legg til om det er tomt
        if (itemDescription.trim().length == 0) return;

        // Legg det til i listen
        todoList.add(new TodoItem(itemDescription));
        console.debug("Added item '%s' to the list", itemDescription);

        // Tøm tekstfeltet
        inputField.val("");

        // Tegn opp listen på nytt
        renderList();
    }

    function renderList() {
        console.debug("Rendering the list, which now contains %s items", todoList.getCount());

        // Tøm listen
        listElement.empty();

        $.each(todoList.items, function(index, todoItem) {
            var todoItemTitle = todoItem.getTitle();

            var checked = todoItem.isFinished() ? "checked" : "";
            var checkBox = $('<input type="checkbox" '+ checked +'/>');
            
            checkBox.change(function(e) {
                if(this.checked) {
                    todoItem.setFinished();
                } else {
                    todoItem.setUnfinished();
                }
            });

            listElement.append(
                $('<li/>')
                    .append(checkBox)
                    .append(todoItemTitle)
                    .wrapInner($('<label/>'))
            )
        });
    }
});