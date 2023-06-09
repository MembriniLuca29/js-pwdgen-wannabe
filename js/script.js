const username = prompt('inserisci il tuo nome');

console.log(username, typeof username);

const surname = prompt('inserisci il tuo cognome');

console.log(surname, typeof surname);

const color = prompt('qualè il tuo colore preferito');

console.log(color, typeof color);


document.getElementById("myid").innerHTML= username + surname + color + "101";