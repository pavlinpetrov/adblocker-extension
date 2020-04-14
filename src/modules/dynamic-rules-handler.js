class DynamicRulesHandler {
  static add(rules) {
    chrome.declarativeNetRequest.updateDynamicRules([], rules);
  }
  static get(callback) {
    return chrome.declarativeNetRequest.getDynamicRules(callback);
  }
  static update(rules) {
    const ids = rules.map(rule => rule.id);

    chrome.declarativeNetRequest.updateDynamicRules(ids, rules);
  }
  static delete(ids) {
    chrome.declarativeNetRequest.updateDynamicRules(ids, []);
  }
  static flush() {
    this.get(rules => {
      const ids = rules.map(rule => rule.id);

      this.delete(ids);
    });
  }
}

export { updateBlockedAdsCounter }