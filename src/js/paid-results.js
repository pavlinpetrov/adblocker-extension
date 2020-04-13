const paidResults = document.querySelectorAll('.ads-ad');

if (paidResults.length) {
  chrome.runtime.sendMessage({
    action: 'updateBlockedAdsCounter',
    amount: paidResults.length,
  });
}
