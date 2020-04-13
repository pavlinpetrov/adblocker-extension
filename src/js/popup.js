const counter = document.querySelector('#counter');
const btn = document.querySelector('#btn');

// Track blocked ads
if (counter) {
  chrome.storage.sync.get(['totalBlockedAdsNum'], result => {
    const totalBlockedAdsNum =
      'totalBlockedAdsNum' in result ? result.totalBlockedAdsNum : 0;

    counter.textContent = `Blocked ads: ${totalBlockedAdsNum}`;
  });
}

// Test multiple events.
if (btn) {
  btn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'testMultipleEvents' });
  });
}
