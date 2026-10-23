// 13-forms — your work goes in this file.
//
// The lesson is example.js:   npm run open 13
// See your own page with:     npm run open 13 exercise
// Check your work with:       npm test 13
//
// exercise.html is written for you and must not be edited. It gives you:
//   #product-form   the form
//   #name, #price   the two inputs
//   #error          a line to show a problem in
//   #list           an empty <ul> for the cards
//
// The first three are started for you. The LAST one has no code — you write
// it, and it is the one that ties the whole of Part 2 together.

// Module-level state to hold the products list
const products = [];

/**
 * Reads what is currently typed into the two boxes.
 *
 * readForm() -> { name: "Pen", price: 15 }
 *
 * The name comes back trimmed. The price comes back as a NUMBER, not the
 * string the input gives you. An empty price box gives 0.
 *
 * @returns {{ name: string, price: number }}
 */
export function readForm() {
  const nameInput = document.querySelector("#name");
  const priceInput = document.querySelector("#price");

  const name = nameInput ? nameInput.value.trim() : "";
  const priceRaw = priceInput ? priceInput.value.trim() : "";
  const price = priceRaw === "" ? 0 : Number(priceRaw);

  return { name, price };
}

/**
 * Empties both boxes.
 *
 * @returns {void}
 */
export function clearForm() {
  const nameInput = document.querySelector("#name");
  const priceInput = document.querySelector("#price");

  if (nameInput) nameInput.value = "";
  if (priceInput) priceInput.value = "";
}

/**
 * Draws the list from an array of items, replacing whatever was there before.
 *
 * renderList([{ name: "Pen", price: 15 }]) puts this inside #list:
 *   <li class="card"><h3>Pen</h3><p class="price">15 EGP</p></li>
 *
 * Calling it again with a different array must REPLACE the old cards, not
 * add to them. An empty array leaves the list empty.
 *
 * @param {Array<{name: string, price: number}>} items
 * @returns {void}
 */
export function renderList(items) {
  const list = document.querySelector("#list");
  if (!list) return;

  list.innerHTML = "";

  for (const item of items) {
    const li = document.createElement("li");
    li.className = "card";

    const h3 = document.createElement("h3");
    h3.textContent = item.name;

    const p = document.createElement("p");
    p.className = "price";
    p.textContent = `${item.price} EGP`;

    li.appendChild(h3);
    li.appendChild(p);

    list.appendChild(li);
  }
}

/**
 * Now you write the whole function. This is the one that makes the page work.
 *
 * Write a function called `wireForm`.
 *
 *   Parameters: none.
 *   Returns:    nothing.
 *
 * It listens for the form's "submit" event, and when that happens:
 *
 *   1. Stops the browser reloading the page. Without this, everything else
 *      you do is thrown away a moment later.
 *   2. Reads the form.
 *   3. If the name is empty, puts the text
 *          Give the product a name.
 *      into #error, and stops there — nothing is added.
 *   4. If the price box is empty or is not a number greater than 0, puts
 *          Give the product a price.
 *      into #error, and stops there.
 *   5. Otherwise: clears #error, adds the item to a list of items that you
 *      keep in this file, redraws the list with `renderList`, and empties
 *      the form.
 *
 * Keep the items in an ordinary array, the way example.js does. The page is
 * a picture of that array, not the place the data lives.
 *
 * Remember `export`.
 */
export function wireForm() {
  const form = document.querySelector("#product-form");
  const errorElement = document.querySelector("#error");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { name, price } = readForm();

    if (!name) {
      if (errorElement) errorElement.textContent = "Give the product a name.";
      return;
    }

    if (!price || price <= 0 || isNaN(price)) {
      if (errorElement) errorElement.textContent = "Give the product a price.";
      return;
    }

    if (errorElement) errorElement.textContent = "";

    products.push({ name, price });
    renderList(products);
    clearForm();
  });
}