const filters = [
	"*://*.doubleclick.net/*",
];

chrome.webRequest.onBeforeRequest.addListener(
    details => ({ cancel: true }),
    { urls: filters },
    ["blocking"]
);