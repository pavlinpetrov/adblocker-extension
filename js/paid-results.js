const paidResults = document.querySelectorAll('.ads-ad');

console.log(paidResults);

if (paidResults.length) {
  chrome.runtime.sendMessage({
    type: 'updateBlockedAdsCounter',
    amount: paidResults.length,
  });
}
