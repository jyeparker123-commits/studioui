# StudioUI documentation repository

This repository currently contains StudioUI documentation and planning files. Treat
the checked-out repository as the source of truth; do not infer that plugin source or
local desktop configuration is present when it is absent from the clone.

Global standard — truth contract, autonomy, door decisions, secrets and the whole
Git/GitHub lifecycle: `C:/Users/Jye_P/.claude/CLAUDE.md`.
Estate rules — priority order, naming, archiving, worktrees: `C:/Users/Jye_P/Projects/CLAUDE.md`.
Those two files are authoritative on a desktop checkout and are not restated in the
repository-specific sections below. The Portable baseline at the end IS a deliberate
condensed copy of them, kept because neither file loads in a fresh cloud clone. Where
the two differ, the desktop files win on a desktop.

## Portable baseline

Applies when the global and estate files are absent (a fresh cloud clone). This file is
context, not enforcement — a rule that must hold regardless belongs in a hook. Treat any
rule stated only here as unenforced.

- Completion is Jye's literal request and named targets, inspected in the current turn.
  Never say fixed, tested, pushed, deployed, live or complete before that. Do not
  substitute adjacent work.
- Label `OBSERVED` / `INFERENCE` / `UNKNOWN`. Never present an inference, an intention or
  a prior report as current fact. Re-check challenged claims. Say which environment you
  checked — never claim one was verified by testing another.
- End state-changing work with `STATUS`, `CLAIMS`, `EVIDENCE`. There is no independent
  Codex or Gemini Stop auditor. Completion is current-turn tool receipts plus the named
  target. Missing evidence is PARTIAL, BLOCKED or UNKNOWN. Do not wait for a second model.
- Routine task Git is your job: check branch and upstream, preserve unrelated work, stage
  only task-owned paths, validate, commit and push. Report blockers honestly.
- No force-push, history rewrite, deletion, secret exposure, permission change or any
  other one-way action without Jye's explicit current-task authorisation.
- `STOP` means stop tools immediately and reply only `Stopped.`, plus a direct answer if
  the same message asked a question.
- Never tell Jye to sleep, rest, calm down, breathe, take a break, stop for the night,
  close the laptop or return tomorrow. Frustration is task feedback, not consent to
  counselling or to abandoning the task.

## Repository workflow

- Read `README.md`, `ROADMAP.md` and `CONTRIBUTING.md` before changing documentation.
- Preserve repository scope. Do not scaffold product source unless Jye explicitly asks.
- Routine task Git is owned by the agent. Validate changed files, commit task-owned
  paths and push the existing branch; report an actual authorization failure as blocked.
