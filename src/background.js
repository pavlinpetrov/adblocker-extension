import { DynamicRulesHandler, updateBlockedAdsCounter, handleMessage } from './js/utils.js';

chrome.runtime.onMessage.addListener(handleMessage);
