// Raccolta dati
const userName = prompt("Qual è il tuo nome?");
console.log(userName, typeof userName);
const userLastName = prompt("Qual è il tuo cognome?");
console.log(userLastName, typeof userLastName);
const userFavColor = prompt("Qual è il tuo colore preferito?");
console.log(userFavColor, typeof userFavColor);

// Logica del programma
const userInputConcat = `${userName}${userLastName}${userFavColor}`;
console.log(userInputConcat, typeof userInputConcat);
const userPassword = `${userInputConcat}21`;
console.log(userPassword, typeof userPassword);

// Output
document.getElementById("user-password").innerHTML = userPassword;