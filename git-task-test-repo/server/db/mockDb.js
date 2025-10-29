// server/db/mockDb.js
// In-memory mock DB used by the demo server

let tasks = [
  { id: '1', title: 'Seed task', description: 'Initial seeded task', completed: false },
  // TODO: add more seeded tasks to better exercise pagination
];

let users = [
  { id: 'u1', name: 'Alice' },
  { id: 'u2', name: 'Bob' }
];

module.exports = {
  getTasks() {
    // NOTE: this returns a shallow copy to avoid accidental mutation
    return tasks.slice();
  },
  createTask({ title, description }) {
    const id = String(Date.now());
    const task = { id, title, description, completed: false };
    tasks.push(task);
    return task;
  },
  deleteTask(id) {
    const idx = tasks.findIndex(t => t.id === id);
    if (idx === -1) return false;
    tasks.splice(idx, 1);
    return true;
  },
  getUsers() { return users.slice(); },
  getUser(id) { return users.find(u => u.id === id); }
};
