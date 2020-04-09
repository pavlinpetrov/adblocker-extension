const counter = document.querySelector('#counter');

chrome.storage.sync.get(['totalBlockedAdsNum'], result => {
  const totalBlockedAdsNum = 'totalBlockedAdsNum' in result ? result.totalBlockedAdsNum : 0;

  counter.textContent = `Blocked ads: ${totalBlockedAdsNum}`;
});
