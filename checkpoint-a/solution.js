import { findAllOrders, findOrderById } from "./orders-db.js";

/**
 * 1. loadOrders()
 * async. Returns every order from the database, as an array.
 *
 * @returns {Promise<Array<object>>}
 */
export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

/**
 * 2. myOrders(orders)
 * Takes an array of orders. Returns only the ones that are both:
 * - from Mansoura, and
 * - with status pending
 *
 * @param {Array<object>} orders
 * @returns {Array<object>}
 */
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Mansoura" && order.status === "pending"
  );
}

/**
 * 3. summarize(orders)
 * Takes an array of orders. Returns number of items, as a number.
 * Add up quantity for every order in the list.
 *
 * @param {Array<object>} orders
 * @returns {number}
 */
export function summarize(orders) {
  return orders.reduce((sum, order) => sum + order.quantity, 0);
}

/**
 * 4. describeOrder(id)
 * async. Looks up one order by its id and returns a label in this shape:
 * "{quantity} x {item} for {student}"
 * If there is no order with that id, returns "Could not find order {id}"
 *
 * @param {number} id
 * @returns {Promise<string>}
 */
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.quantity} x ${order.item} for ${order.student}`;
  } catch (error) {
    return `Could not find order ${id}`;
  }
}

/**
 * 5. toJsonLines(orders)
 * Takes an array of orders. Returns JSON text for an array of objects
 * keeping only student and item from each order, in that order, and nothing else.
 *
 * @param {Array<object>} orders
 * @returns {string}
 */
export function toJsonLines(orders) {
  const stripped = orders.map((order) => ({
    student: order.student,
    item: order.item,
  }));
  return JSON.stringify(stripped);
}