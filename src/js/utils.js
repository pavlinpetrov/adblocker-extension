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

const updateBlockedAdsCounter = adsNum => {
  chrome.storage.sync.get(['totalBlockedAdsNum'], result => {
    const totalBlockedAdsNum = 'totalBlockedAdsNum' in result ? result.totalBlockedAdsNum + adsNum : adsNum;

    chrome.storage.sync.set({ totalBlockedAdsNum });
  });
};

const handleMessage = message => {
  switch (message.action) {
    case 'updateBlockedAdsCounter':
      updateBlockedAdsCounter(message.amount);
      break;
    case 'testMultipleEvents':
      updateBlockedAdsCounter(100);
      break;
  }
};

export { DynamicRulesHandler, updateBlockedAdsCounter, handleMessage }