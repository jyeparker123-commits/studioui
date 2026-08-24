'use strict';

let raw = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => { raw += chunk; });
process.stdin.on('end', () => {
  let input = {};
  try { input = JSON.parse(raw || '{}'); } catch {
    process.stdout.write(JSON.stringify({
      decision: 'block',
      reason: 'Portable response-conduct check could not parse the Stop event. Do not claim completion.'
    }));
    return;
  }

  const message = String(input.last_assistant_message || '');
  const remoteSession = process.env.CLAUDE_CODE_REMOTE === 'true';
  const incompleteStatus = /^\s*STATUS\s*:\s*(?:PARTIAL|BLOCKED|UNKNOWN)\b/im.test(message);
  const completionClaim =
    /^\s*STATUS\s*:\s*COMPLETE\b/im.test(message) ||
    /^\s*(?:done|completed|fixed|implemented|deployed|published|delivered|configured|installed)\b/im.test(message) ||
    /\b(?:I|we)(?:'ve| have)\s+(?:now\s+|successfully\s+)?(?:completed|finished|fixed|implemented|updated|changed|created|pushed|deployed|published|installed|configured|verified|tested)\b/i.test(message) ||
    /\b(?:is|are)\s+(?:now\s+)?(?:fixed|complete|completed|deployed|live|working|operational)\b/i.test(message);
  const consequentialClaim =
    /\b(?:changed|created|fixed|implemented|updated|removed|deleted|committed|pushed|deployed|published|installed|configured|migrated|production|live|security|credential|secret|payment|database|audit|hook|settings|rules)\b/i.test(message);
  const prohibited = [
    /\b(?:get|go\s+get|try\s+to\s+get|please\s+get|you\s+(?:should|need\s+to)\s+get)\s+(?:some\s+)?sleep\b/i,
    /\b(?:you\s+(?:should|need\s+to)|please|try\s+to|go\s+and)\s+(?:sleep|rest|calm\s+down|breathe)\b/i,
    /\b(?:take|have)\s+(?:a\s+)?(?:break|breather)\b/i,
    /\b(?:calm\s+down|take\s+a\s+breath|close\s+(?:the|your)\s+laptop)\b/i,
    /\b(?:we\s+can\s+|let's\s+)?stop\s+for\s+(?:the\s+)?night\b/i,
    /\b(?:come\s+back|pick\s+this\s+up|we(?:'ll|\s+will)\s+continue)\s+(?:tomorrow|in\s+the\s+morning|when\s+you(?:'re|\s+are)\s+rested)\b/i
  ];

  if (prohibited.some(pattern => pattern.test(message))) {
    process.stdout.write(JSON.stringify({
      decision: 'block',
      reason: "Unsolicited sleep, rest, emotional-regulation or time-of-day advice is prohibited. Answer Jye's task directly."
    }));
    return;
  }

  if (remoteSession && !incompleteStatus && completionClaim && consequentialClaim) {
    process.stdout.write(JSON.stringify({
      decision: 'block',
      reason: 'This cloud session has no independent Codex audit. Continue the requested work if needed, then report STATUS: PARTIAL and AUDIT: unavailable. Do not claim consequential completion.'
    }));
    return;
  }

  if (/^\s*STATUS\s*:\s*COMPLETE\b/im.test(message) && /\bAUDIT\s*:\s*unavailable\b/i.test(message)) {
    process.stdout.write(JSON.stringify({
      decision: 'block',
      reason: 'A consequential result cannot be COMPLETE while its required independent audit is unavailable. Report PARTIAL.'
    }));
  }
});
