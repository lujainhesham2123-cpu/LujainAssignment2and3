import { items } from "./items.js";

/**
 * Draws an array of items into #list, replacing whatever was there.
 * Each item becomes an <li> with class "entry" and text "{name} - {price} EGP".
 *
 * @param {Array<{id: number, name: string, category: string, price: number, inStock: boolean}>} list
 * @returns {void}
 */
export function renderItems(list) {
  const ul = document.querySelector("#list");
  if (!ul) return;

  ul.innerHTML = "";

  for (const item of list) {
    const li = document.createElement("li");
    li.className = "entry";
    li.textContent = `${item.name} - ${item.price} EGP`;
    ul.appendChild(li);
  }
}

/**
 * Returns only the items over 100 EGP, as an array of item objects from items.
 *
 * @returns {Array<object>}
 */
export function matching() {
  return items.filter((item) => item.price > 100);
}

/**
 * Sets the page up:
 * 1. Draws all the items straight away, using renderItems.
 * 2. Listens for a click on #apply. When clicked, redrawn with items over 100 EGP.
 *
 * @returns {void}
 */
export function start() {
  renderItems(items);

  const applyBtn = document.querySelector("#apply");
  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      renderItems(matching());
    });
  }
}