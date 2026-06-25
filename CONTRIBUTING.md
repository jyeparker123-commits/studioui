# Contributing to StudioUI

Thanks for your interest in StudioUI — a multi-modal AI studio for WordPress
(image · video · GIF · music · AI chat companions). This guide explains how the
project is structured and how to get involved.

**Product site:** [studioui.ai](https://studioui.ai)

## Open-core model

StudioUI is **core-open, Pro-closed**:

- The **free core** is open for inspection, evaluation, and community contribution.
- **Pro** features (BYO-keys, self-host tooling, advanced controls) are commercial
  and live behind a license.

Contributions are accepted against the open core. Please open an issue before
starting large changes so we can align on direction.

## Ways to contribute

- **Report a bug** — open an issue with steps to reproduce, your WordPress and PHP
  version, and any relevant logs.
- **Request a feature** — open an issue describing the use case and the outcome you
  want. Check the [roadmap](ROADMAP.md) first.
- **Improve docs** — typos, clarifications, and quick-start improvements are always
  welcome.
- **Submit code** — fork, branch from `main`, keep changes focused, and open a pull
  request that references the related issue.

## Pull request guidelines

1. One logical change per PR — keep diffs reviewable.
2. Follow WordPress coding standards (PHP_CodeSniffer with the WordPress ruleset).
3. Describe what changed and why; link the issue it closes.
4. Make sure the plugin activates cleanly and existing features still work.

## Reporting security issues

Please do **not** open a public issue for security vulnerabilities. Report them
privately via [studioui.ai](https://studioui.ai) so they can be addressed before
disclosure.

## License

By contributing, you agree that your contributions to the open core are licensed
under the [GPL-2.0](LICENSE) license that covers this repository.
