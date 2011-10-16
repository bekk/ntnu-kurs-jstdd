module("42");

// Oppgave 1:
// Skriv en test som verifiserer at 1 + 41 = 42 ved hjelp av ok()
test("is ok", function() {
    var sum = 1 + 41;
	ok(sum == 42);
});

// Oppgave 2
// Skriv en test som verifiserer at 1 + 41 = 42 ved hjelp av equals()
test("is equals", function() {
	var sum = 1 + 41;
	equals(sum, 42);
});

// Oppgave 3:
// Lag ny modul kalt 'Objects'
// INFO: Objekter og arrays vil oppføre seg på samme måte under test,
//       med det unntaket at arrays aksesseres med syntaksen array[index]

module('Objects & arrays', {
	setup: function() {
		this.myCoins = {notes_100: 1};
		this.yourCoins = {notes_100: 1};
	}
});

// Oppgave 4: 
// Sammenlign de to objektene under ved hjelp av deepEquals()

//var myCoins = {notes_100: 1};
//var yourCoins = {notes_100: 1};

test("The amount is same", function() {
	same(this.myCoins, this.yourCoins);
});


// Oppgave 5: 
// Refaktorer myCoins og yourCoins til å initialiseres i setup i 'Objects'-modulen
// Se på dokumentasjonen til module()

// Løsningen er gjort i module()-metoden
// og som et tillegg til oppgave 3.

// Oppgave 6: 
// Sammenlign myCoins og yourCoins med equals()

test("The amount is again the same", function() {
	equals(this.myCoins.notes_100, this.yourCoins.notes_100);
});
