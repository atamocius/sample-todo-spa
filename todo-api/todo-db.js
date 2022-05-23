import { nanoid } from 'nanoid';

/**
 * @typedef {TodoId & TodoData} TodoItem
 */

/**
 * @typedef {Object} TodoId
 * @property {string} id
 */

/**
 * @typedef {Object} TodoData
 * @property {string} desc
 * @property {boolean} done
 */

/** @type {Map<string, TodoItem>} */
const items = new Map([
  [
    'P39ag106GlcX_GUbPJ7uA',
    { id: 'P39ag106GlcX_GUbPJ7uA', desc: 'Learn React', done: false },
  ],
  [
    'Dz3TrgAn51o20CNGVQKtg',
    { id: 'Dz3TrgAn51o20CNGVQKtg', desc: 'Learn Node.js', done: false },
  ],
  [
    'fGRwyB44QWARAWepzN1Ri',
    { id: 'fGRwyB44QWARAWepzN1Ri', desc: 'Learn TypeScript', done: true },
  ],
  [
    'GxF2wQdJqiUFcBL08Lrvl',
    { id: 'GxF2wQdJqiUFcBL08Lrvl', desc: 'Learn GraphQL', done: false },
  ],
]);

export function getAll() {
  return [...items.values()];
}

export function getAllUndone() {
  return [...items.values()].filter(x => !x.done);
}

export function getAllDone() {
  return [...items.values()].filter(x => x.done);
}

/**
 * @param {TodoData} data
 */
export function add(data) {
  const id = nanoid();
  items.set(id, { id, ...data });
}

/**
 * @param {TodoItem} item
 */
export function update(item) {
  if (items.has(item.id)) {
    items.set(item.id, item);
    return true;
  }
  return false;
}

/**
 * @param {string} id
 */
export function remove(id) {
  return items.delete(id);
}
