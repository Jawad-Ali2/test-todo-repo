# Architecture (demo repo)

This is a deliberately small architecture for the GitTask demo repo.

- Server: Express app exposing /api/tasks and /api/users. Uses an in-memory mock DB (no persistence).
- Client: Static files served by Express. Minimal JS to fetch and create tasks.

Known limitations (intentional):
- No authentication (TODO: add auth middleware)
- No input sanitization (FIXME: avoid XSS in production)
- No pagination or filtering on task lists (TODO)

This file contains a few additional TODO notes to ensure the extraction engine finds them.

TODO: Add sequence diagram showing API flows.
FIXME: Add more detailed error codes.
NOTE: This is not intended to be production-ready.
