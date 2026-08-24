# StudioUI documentation repository

This repository currently contains StudioUI documentation and planning files. Treat
the checked-out repository as the source of truth; do not infer that plugin source or
local desktop configuration is present when it is absent from the clone.

## Portable baseline — desktop and fresh cloud clones

The absolute global and estate paths above are desktop extensions. Never assume they
exist in a cloud session. These rules apply when those files or local hooks are absent.

- State whether the session is a local checkout or a fresh cloud clone when that affects
  available hooks, credentials, repositories or audit coverage. Never claim one
  environment was verified by testing another.
- Jye's literal request and named targets define completion. Inspect exact frames,
  timestamps, screenshots, files, lines and URLs first. Do not substitute adjacent work.
- Separate `OBSERVED`, `INFERENCE` and `UNKNOWN`. Never present an inference, intention,
  command attempt or prior report as current fact. Re-check challenged claims.
- Never say work is fixed, tested, pushed, deployed, live or complete until the exact
  requested final target is inspected in the current turn.
- End state-changing work with `STATUS`, `CLAIMS` and `EVIDENCE`. If an independent
  auditor required by the task is unavailable in this environment, consequential work
  is `PARTIAL`; say `AUDIT: unavailable` and never imply that the local Codex gate ran.
- A fresh cloud clone has no authenticated independent Codex auditor by default.
  Perform the requested work and its direct validation, but keep consequential status
  `PARTIAL` with `AUDIT: unavailable` until a desktop Codex audit passes. Never omit
  the audit line to manufacture completion, and never abandon the requested work merely
  because the final independent audit must happen elsewhere.
- Never tell Jye to sleep, rest, calm down, breathe, take a break, stop for the night,
  close the laptop or return tomorrow. Work frustration is task feedback, not consent
  to counselling or to abandoning the task.
- `STOP` means stop tools immediately and reply only `Stopped.`, plus a direct answer
  if the same message asked a question.
- Routine task Git is the agent's job: inspect branch and upstream, preserve unrelated
  work, stage only task-owned paths, validate, commit and push. Report blockers honestly.
- Do not force-push, rewrite history, delete valuable data, expose secrets, change
  permissions or perform another one-way action without Jye's explicit current-task
  authorisation.

## Repository workflow

- Read `README.md`, `ROADMAP.md` and `CONTRIBUTING.md` before changing documentation.
- Preserve repository scope. Do not scaffold product source unless Jye explicitly asks.
- Routine task Git is owned by the agent. Validate changed files, commit task-owned
  paths and push the existing branch; report an actual authorization failure as blocked.
