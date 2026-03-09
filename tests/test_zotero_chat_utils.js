const assert = require('node:assert/strict');

const { inferSpeaker } = require('../app/zotero-chat-utils.js');

assert.equal(inferSpeaker({ roleText: '你', className: '' }), 'User');
assert.equal(inferSpeaker({ roleText: '助手', className: '' }), 'AI');
assert.equal(inferSpeaker({ roleText: '', className: 'msg-content msg-content-user' }), 'User');
assert.equal(inferSpeaker({ roleText: '', className: 'msg-content msg-content-ai' }), 'AI');
assert.equal(inferSpeaker({ roleText: '思考过程', className: 'msg-content thinking-history-content' }), '');
assert.equal(inferSpeaker({ roleText: '', className: 'thinking-history-content' }), '');

console.log('zotero chat utils tests passed');
