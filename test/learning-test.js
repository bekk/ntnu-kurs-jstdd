module("42");

// Oppgave 1:
// Skriv en test som verifiserer at 1 + 41 = 42 ved hjelp av ok()
test("is ok", function() {
    // Arrange
    // Act
    // Assert
});

// Oppgave 2
// Skriv en test som verifiserer at 1 + 41 = 42 ved hjelp av equals()


// Vi har laget en modul her. Dette medfører at alle testene under denne kodelinjen
// vil tilhøre modulen. Dette vil vises i testkjøreren ved at navnet på modulen
// prefikser alle testnavnene.
//
// Ved riktig bruk, så vil modulnavn og testnavn danne gode og forklarende setninger
// som gjør det enkelt å lese hva testen gjør.
module("Objects & arrays");

// Oppgave 3:
// Sammenlign de to objektene under ved hjelp av deepEquals()

var myCoins = {notes_100: 1};
var yourCoins = {notes_100: 1};


// Her har vi laget en ferdig modul med setup-kode.
// Koden i setup-funksjonen kjøres før hver test. Det er vanlig at man legger
// kode som går igjen i testene her for å unngå duplisering.
//
// Legg merke til bruken av "this". Når vi bruker this i setup-funksjonen
// kan du nå feltet du oppretter i test-metoden.
// Så, this.myCoins er tilgjengelig i testene du skal skrive under.
module("Objects & arrays with setup-method", {
    setup: function() {
        this.myCoins = {notes_100: 2};
        this.yourCoins = {notes_100: 2};
    }
});

// Oppgave 4:
// Sammenlign myCoins og yourCoins med equals()
