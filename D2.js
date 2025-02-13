/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 5;
let n2 = 8;

if (n1 > n2) {
  console.log(n1 + '' + 'è maggiore di' + '' + n2);
} else {
  console.log('esercizio1', n2 + '' + 'è maggiore di' + '' + n1);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (n2 === 5) {
  console.log('esercizio2', 'equal');
} else {
  console.log('esercizio2', 'not equal');
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let n3 = 20;
if (n3 % 5 === 0) {
  console.log('esercizio3', 'divisibile per 5');
} else {
  console.log('esercizio3', 'non divisibile per 5');
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n4 = 4;
let n5 = 3;
let x1 = 5;
let x2 = 6;

if (
  x1 === 8 ||
  x2 === 8 ||
  x1 + x2 === 8 ||
  x1 - x2 === 8 ||
  x2 + x1 === 8 ||
  x1 + x2 === 8
) {
  console.log('esercizio4', 'verificato!');
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//senza sconto
let cart = n3 + n4;
let tot = cart;
let discount = 10;
let totalShoppingCart = cart;
console.log('esercizio 5,', 'totalShoppingCart', totalShoppingCart);

if (totalShoppingCart >= 50) {
  (totalShoppingCart = cart - 10),
    console.log(
      'esercizio 5',
      'il tuo totale è di' + '',
      totalShoppingCart + '',
      'per te uno sconto di 10 euro!'
    );
} else {
  console.log(
    'esercizio 5,' + '' + 'il tuo totale è di ' + '',
    totalShoppingCart + '',

    'euro,' + '',
    'non hai diritto allo sconto'
  );
}

//con sconto
let n6 = 30;
let n7 = 40;
let cart2 = n6 + n7;
let tot2 = cart2;
let tSP = cart2;

if (tSP >= 50) {
  (tSP = cart2 - 10),
    console.log(
      'esercizio 5',
      'il tuo totale è di' + '',
      tSP + '',
      'per te uno sconto di 10 euro!'
    );
} else {
  console.log(
    'esercizio 5,' + '' + 'il tuo totale è di ' + '',
    tSP + '',

    'euro,' + '',
    'non hai diritto allo sconto'
  );
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let data = '28/10/2025';
let deliver = 5;
const blackFriday = 20;
const prodotto = 12;
let sconto = (prodotto * blackFriday) / 100;
let prezzoScontato = prodotto - sconto;
console.log('esercizio6', 'il prezzo scontato è di euro', prezzoScontato);

let totale = prezzoScontato + deliver - sconto;
console.log('esercizio6', 'totale parziale', totale);

if (data === '28/10/2025') {
  (totaleFinale = totale - deliver),
    console.log(
      'esercizio6',
      ' per te consegna gratuita! e il totale è di ',
      totaleFinale
    );
} else {
  totaleFinale = totale;
  console.log('esercizio6', 'non è il black friday oggi, totale', totaleFinale);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myList = [2, 4, 6];
console.log('esercizio7', 'array base', myList);
if (myList[1] < myList[2]) {
  const myListReverse = myList.reverse();
  console.log('esercizio7', 'array reverse', myListReverse);
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let due = 15;
let tre = 2;
if (due % 2 === 0) {
  console.log('esercizio 9', due, 'numero pari');
} else {
  console.log('esercizio 9', due, 'numero dispari');
}

if (tre % 2 === 0) {
  console.log('esercizio 9', tre, 'numero pari');
} else {
  console.log('esercizio 9', tre, 'numero dispari');
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
let val = 7;
if ((val < 10) & (val > 5)) {
  console.log('esercizio10', 'Meno di 10');
} else if (val < 5) {
  console.log('esercizio10', 'Meno di 5');
} else if (val >= 10) {
  console.log('esercizio10', 'Uguale a 10 o maggiore');
}
let val2 = 10;
if ((val2 < 10) & (val > 5)) {
  console.log('esercizio10', 'Meno di 10');
} else if (val2 < 5) {
  console.log('esercizio10', 'Meno di 5');
} else if (val2 >= 10) {
  console.log('esercizio10', 'Uguale a 10 o maggiore');
}
let val3 = 2;
if ((val3 < 10) & (val3 > 5)) {
  console.log('esercizio10', 'Meno di 10');
} else if (val3 < 5) {
  console.log('esercizio10', 'Meno di 5');
} else if (val3 >= 10) {
  console.log('esercizio10', 'Uguale a 10 o maggiore');
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
