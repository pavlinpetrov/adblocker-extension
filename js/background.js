const filters = [
	"*://*.doubleclick.net/*",
];

const blockRequest = () => {
	updateBlockedAdsCounter(1);
	return { cancel: true };
};

chrome.webRequest.onBeforeRequest.addListener( blockRequest, { urls: filters }, ["blocking"] );