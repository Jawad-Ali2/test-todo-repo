# git-task-test-repo

This repository is a realistic demo used to test tools that extract developer micro-tasks (TODO, FIXME, NOTE, HACK) from code comments.

Structure:
- `server/` - simple Express backend with many TODO/FIXME comments across files
- `client/` - minimal frontend (HTML/JS/CSS) with scattered comments
- `docs/` - architecture notes
- `tests/` - a tiny test runner that validates the server responds

Quick start (PowerShell):

```powershell
cd git-task-test-repo
npm install
npm start
# Open http://localhost:4000
```

This repo intentionally contains many TODO/FIXME/NOTE/HACK comments inside code to exercise extraction engines.
