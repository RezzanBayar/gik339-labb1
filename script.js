console.log("Innan blocket");
{
  let name = "Elin";
  const age = 24;
  var city = "Stockholm";

  console.log(name);
  console.log(age);
  console.log(city);
}

console.log("Efter blocket");
console.log(city);
/*
Reflektion uppgift 2: 

När jag arbetetade med variabler lärde jag mig att var, let och const
har olika regler för var de kan användas. 

Jag såg att let och const är begränsade till blocket där de deklareras, 
medan var kan användas utanför blocket.

Jag lärde mig också att const inte kan ändras efter att den har deklarerats.
Detta är användbart när man vill vara säker på att värdet inte ändras av misstag.
*/
const add = (num1, num2) => {
  console.log(num1 == 0);
  console.log(num2 === "0");
  console.log(num2 === 0);
  console.log(num1 == NaN);

  console.log(Number.isNaN(num1));

  console.log(num1 ? "truthy" : "falsy");

  if (
    num1 !== null &&
    num1 !== undefined &&
    num2 !== null &&
    num2 !== undefined &&
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    !isNaN(num1) &&
    !isNaN(num2)
  ) {
    return num1 + num2;
  } else {
    console.log("Felaktig input");
  }
};

console.log(add(5, 3));

/*
Reflektion uppgift 3:

Att const används för att deklarera funtionen 
och förhindra att variabeln delldelas ett nytt värde. 

Att let hade tillåtit att variabeln delldelas ett nytt värde,
men hade inte påverkat själva funktionen.

Att en arrow function använder => och kan skrivas med en vanlig
function-deklaration i stället. 

Att return skixkar tillbaka resultatet från beräkningen. 
*/

/*
Reflektion uppgift 4:

En ternary operator är ett kortare alternativ sätt att skriva
if och else.

Två likhetstecken (==) jämför värden medan tre
(===) jämför både värde och datatyp.

Jag använde && för att kontrollera flera vilkor samtidigt. 
Alla villkor måste vara sanna för att funktionen ska returnera summan. 

Jag använde !== null och !== undefined för att
kontrollera att parametrarna har giltiga värden.
*/

const num1 = 0;
let arg1;
let sum = false;

// Test 1
console.log(add(sum, 1));

// Test 2
sum = add("0", 3);
console.log(sum);

// Test 3
console.log(add(3, "num1"));

// Test 4
console.log(add(-5, num1));

// Test 5
console.log(add(arg1, 7));

// Test 6
console.log(add());

console.log(num1);
console.log(sum);

/*
Reflektion uppgift 5:

En parameter är namnet som används i funktionen,
medan ett argument är värdet man skickar in när
man anropar funktionen. En variabel används för
att spara ett värde.

Det sista värdet på num1 blir 0 eftersom värdet
inte ändras i testerna. Sum blir undefined eftersom
test 2 inte fungerar då "0" är text och inte en siffra.

Test 1: sum har värdet false, vilket inte är ett tal.

Test 2: "0" är en textsträng och inte ett numeriskt värde.
Därför returnerar funktionen inget värde och sum blir undefined.

Test 3: Det är sum2 som innehåller texten "num1", inte num1.
Därför returnerar funktionen inget värde.

Test 4: -5 + 0 = -5, vilket är korrekt.

Test 5: arg1 äre undefined eftersom den deklarerats utan något värde.
Därför returnerar funktionen inget värde.

Test 6: Båda parametrarna saknar argument, vilket gör att de är undefined.

Variablerna: num1 behåller värdet 0, medan sum kan ändras 
eftersom den deklarerats med let.
*/
