
//UPPGIFT 2- VARIABLER OCH SCOPE

/* //ANVÄNDNING FÖRE BLOCKET:
console.log(variabel_var); //konsollen skriver ut "undefined"
console.log(variabel_let); //ingenting händer
console.log(variabel_const); //ingenting händer
*/

/*//SKAPAR VARIABLER OCH ANVÄNDNING I BLOCKET:
{
    var variabel_var = "hej"
    let variabel_let = "hello"
    const variabel_const = "hola"

    //alla tre skirvs ut korrekt om de ligger i blocket:
    console.log(variabel_var);
    console.log(variabel_let);
    console.log(variabel_const);
}
*/

/* //ANVÄNDNING EFTER BLOCKET: var variabeln skrivs ut korrekt, inte letvariabeln eller constvariabeln:
console.log(variabel_var); //fungerar!
console.log(variabel_let); //ger fel
console.log(variabel_const); //ger fel
*/


/* REFLEKTION UPPGIFT 2:
1. Skillnaden på var, let och const gällande block:
Var kan användas både i blocket och efter blocket. 
Den har ett globalt-scope.
Let och const har block-scope och existerar endast inom blocket där de deklareras (inom {}).
De kan inte användas utanför blocket, varken före eller efter.

2. Olika placeringar av console.log():
    Före blocket: var-variabeln skrivs ut i konsollen som "undefined". 
    Gällande let och const händer ingenting eftersom de hamnar i en "Temporal Dead Zone".
    I blocket: Alla skrivs ut korrekt i konsollen
    Efter blocket: Endast var-variabeln skrivs ut korrekt.
                    Variablerna let och const får i konsollen meddelandet "Uncaught ReferenceError: variabel_let (respektive variabel_const) is not defined at ...".

*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//UPPGIFT 3- JÄMFÖRELSER OCH SPECIALVÄRDEN
 
/*console.log("3" == 3); //true. == typkonverterar och därför blir de samma typ. Dvs. strängen "3" blir talet/numret 3
console.log("3" === 3); //false eftersom en string jämförs med ett number

console.log(NaN === NaN); //kluring. Detta ger false. NaN är aldrig lika något annat värde, inte ens sig själv
console.log(null == undefined); //true. null = inget värde. undefined = har ännu inte tilldelat värde. Det är tydligen samma värde i js då båda har en avsaknad av ett värde.
console.log(null === undefined); //false. Eftersom null är en egen typ och undefined är en annan egen typ = inte samma typ.

//ternary operator
console.log(undefined ? "truthy" : "falsy");
*/

/* REFLEKTION UPPGIFT 3
1. Output på värden med == och ===:
    Om man jämför en string t.ex. "3" med ett numreriskt värde (3 i detta fall) med == genomförs en typkonvertering vilket gör stringen "3" till numret 3. 
    Då jämförs 3 med 3 och det är ju samma dvs. outputen är true. 
    Om man tar "3" === 3 jämförs typerna med varandra och en string är inte ett numreriskt värde dvs. outputen är false. 

    Med samma logik som ovan kan man tro att NaN === NaN är true, men så är det inte.
    I fallet med NaN kan det inte jämföras med något annat värde eller sig själv. 
    Outputen blir false.
     
    null == undefined ger outputen true. 
    Detta eftersom i javascript betyder de båda en avsaknad av ett värde.
    Eftersom == typkonverterar blir det att man jämför avsaknad av värde med avsaknad av värde. 

    null === undefined ger outputen false.
    Detta är eftersom null är en enskild typ och undefined är en annan enskild typ.
    Eftersom === typkonverterar och jämför typer, blir det false då båda värdena är egna värden.

2. Självstående uttryck VS. inom paranteserna hos en if-sats:
    Om ett uttryck står för sig själv körs det direkt och returnerar sitt värde.
    I en if-sats utvärderas uttrycket som en bool. 
    Om värdena räknas som truthy (inte false, 0, tom sträng, null, undefined) så körs if-satsen.


3. Vad är och representerar NaN, undefined och null?:
    NaN står för "Not a number" vilket representerar ett resultat av en ogiltig eller odefinierbar beräkning av nummer.
    Null betyder inget värde. Det är inte samma sak som 0, utan används medvetet för att  visa på att en variabel är tom på värde(n).
    Undefined betyder att en variabel är deklarerad men ännu inte har tilldelats ett värde.
*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//UPPGIFT 4- Funktioner
/*
// 3. variabel name (global/i roten)
let name = "Maja"

// 1. Skapa funktionen greet med parametern name
function greet(name)
{
    console.log("I funktionen, parameterns name:", name);
    return "Hej " + name;
}

//2. Anropar funktionen med valfritt argument. Denna nya parameter kommer skriva över det name jag angav högre upp dvs. "Maja". "Molly" blir ocks¨å strängen i funktionen ovan istället.
 console.log(greet("Molly")); //går även att anropa funktionen innan funktionsblocket då jag använder en funktionsdeklaration

//2. Sparar returvärdet i en variabel
let greetingValue = greet("Lennart");
console.log(greetingValue);

//3. Utskrift av den globala variabeln 
console.log("Utanför funktionen, här hälsar vi på:", name);
*/

/* REFLEKTION UPPGIFT 4
1. Skillnader med att skapa funktioner med de 3 olika sätten:
    Funktionsdeklaration kan anropas innan den deklareras alltså innan blocket.
    Funktionsuttryck kan bara anropas efter raden med kod där den definieras (alltså inte innan blocket).
    Arrowfunktion har en kortare syntax men kan också bara anropas efter raden där den definieras. 

2. Reflektion om varifrån man kan anropa funktioner:
En funktionsdeklaration ger mer flexibilitet då den kan anropas innan den deklarerats.
Funktionsdeklaration eller arrowfunktion kan endast anropas efter koden där de skapas. 
Detta ger en striktare kontroll över funktionerna men det kan vara bra om man vill ha bra koll på flödet i koden och veta exakt vad när något sker.

3. Ändrig av variabeln/parametern name i de olika situationerna och utskriftens påverkan:
Om jag ändrar name innuti en funktion sriver de över den globala variabeln.
Dvs. det är det namn jag skriver in i funktionen som kommer finnas i utskriften av funktionen.
Om jag ändrar den globala variabeln name ändras namnet i utskriften för alla funktioner som använder den utanför blocket.

4. Skillnaden mellan parameter, variabel och argument:
Parameter är en plats för ett värde. 
I denna kod är parametern "name".
Argumentet är själva värdet t.ex. "Molly". 
Det är det värde som skrivs ut.
Variabel är en behållare för ett värde.
T.ex. i raden med let name = "Maja" så är name variabeln. 
Den lagrar det värde den tilldelas.
*/ 