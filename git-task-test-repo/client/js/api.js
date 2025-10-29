// client/js/api.js
// Simple API helpers for the demo client

const API = {
  async fetchTasks() {
    // TODO: handle network errors and retries
    const res = await fetch('/api/tasks');
    return res.json();
  },
  async createTask(payload) {
    // FIXME: no client-side validation yet
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return res.json();
  }
};

// HACK: exposing API to window for debugging in demo
window.__DEMO_API = API;
