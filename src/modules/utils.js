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

export { updateBlockedAdsCounter, handleMessage };
