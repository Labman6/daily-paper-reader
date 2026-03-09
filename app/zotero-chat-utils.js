(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.DPRZoteroChatUtils = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const normalize = (value) => String(value || '').trim();

  const inferSpeaker = ({ roleText = '', className = '' } = {}) => {
    const role = normalize(roleText);
    const cls = normalize(className);

    if (role.includes('思考过程')) return '';
    if (role.includes('你')) return 'User';
    if (role.includes('助手')) return 'AI';

    if (/\bmsg-content-user\b/.test(cls)) return 'User';
    if (/\bmsg-content-ai\b/.test(cls)) return 'AI';
    return '';
  };

  return {
    inferSpeaker,
  };
});
