const filters = [
	"*://*.doubleclick.net/*",
];

// Updates the number of blocked ads stored in the local storage
const updateBlockedAdsCounter = adsNum => {
	chrome.storage.sync.get(['totalBlockedAdsNum'], result => {
		const totalBlockedAdsNum = 'totalBlockedAdsNum' in result ? result.totalBlockedAdsNum + adsNum : adsNum;

		chrome.storage.sync.set({totalBlockedAdsNum}, () => {
			console.log(`AdBlocker has blocked ${totalBlockedAdsNum} ads so far.`);
		});
	});
};

const blockRequest = () => {
	updateBlockedAdsCounter(1);
	return { cancel: true };
};

chrome.webRequest.onBeforeRequest.addListener( blockRequest, { urls: filters }, ["blocking"] );