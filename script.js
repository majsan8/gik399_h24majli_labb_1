
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

//UPPGIFT 3- JÄMFÖRELSER OCH SPECIALVÄRDEN
 
console.log("3" == 3); //true. == typkonverterar och därför blir de samma typ. Dvs. strängen "3" blir talet/numret 3
console.log("3" === 3); //false eftersom en string jämförs med ett number

console.log(NaN === NaN); //kluring. Detta ger false. NaN är aldrig lika något annat värde, inte ens sig själv
console.log(null == undefined); //true. null = inget värde. undefined = har ännu inte tilldelat värde. Det är tydligen samma värde i js då båda har en avsaknad av ett värde.
console.log(null === undefined); //false. Eftersom null är en egen typ och undefined är en annan egen typ = inte samma typ.

