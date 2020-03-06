const filters = [
	"*://*.doubleclick.net/*",
];

const blockRequest = () => {
	return { cancel: true };
};

chrome.webRequest.onBeforeRequest.addListener( blockRequest, { urls: filters }, ["blocking"] );