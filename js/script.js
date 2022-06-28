/*
Rivediamo l’esercizio della lista della spesa visto insieme,
ma questa volta con il ciclo while al posto del ciclo for.
Facciamo attenzione a non dimenticare tutte le differenze 
implementative che il ciclo while ci impone,
in particolare alla variabile di indice.
*/

const shoppingList = document.getElementById("shop-list");

let items = ["Uova", "Pane", "Latte", "Biscotti", "Pasta", "Affettati", "Formaggio", "Verdura", "Frutta"];

let itemList = "";
let i = 0;

while (i < items.length) {
  itemList += `<li>${items[i]}</li>`;
  i++;
}

shoppingList.innerHTML = itemList;