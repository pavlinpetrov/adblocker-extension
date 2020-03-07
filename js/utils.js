const updateBlockedAdsCounter = adsNum => {
	chrome.storage.sync.get(['totalBlockedAdsNum'], result => {
		const totalBlockedAdsNum = 'totalBlockedAdsNum' in result ? result.totalBlockedAdsNum + adsNum : adsNum;

		chrome.storage.sync.set({totalBlockedAdsNum});
	});
};