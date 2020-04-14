import { handleMessage } from './modules/utils.js';

chrome.runtime.onMessage.addListener(handleMessage);
