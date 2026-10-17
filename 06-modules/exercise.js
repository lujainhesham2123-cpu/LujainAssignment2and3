// 06-modules — your work goes in this file, and in one you create yourself.
//
// Read 06-modules/README.md first, then read catalog.js, then run:
//   node 06-modules/example.js
// Check your work with: npm test 06

// This import line is written for you. It is the only reason `products`,
// `formatEGP` and `shopName` exist in this file at all — delete it and none of
// them are defined any more.
import shopName, { products, formatEGP } from "./catalog.js";

/**
 * How many products the catalog has.
 * productCount() -> 4
 *
 * Takes no parameters — it uses the imported `products` directly.
 *
 * @returns {number}
 */
export function productCount() {
  return products.length;
}

/**
 * A price tag for one product.
 * priceTag({ name: "Notebook", price: 45 }) -> "45 EGP"
 *
 * Use the imported `formatEGP` rather than building the string yourself.
 *
 * @param {object} product
 * @returns {string}
 */
export function priceTag(product) {
  return formatEGP(product.price);
}

/**
 * A heading for the catalog page.
 * shopHeading() -> "GIU Campus Store catalog"
 *
 * Use the imported `shopName` — the default export from catalog.js.
 *
 * @returns {string}
 */
export function shopHeading() {
  return `${shopName} catalog`;
}