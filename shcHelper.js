chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	var domain = tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[1];
	console.log('SHCHelper Log: shcHelper.js domain = '+domain);
	if (domain=='www.sears.com' || domain=='www.kmart.com' || domain=='staging.ch4.intra.sears.com' || domain=='staging.ch4.intra.kmart.com' || domain=='sears.com' || domain=='kmart.com') {
		chrome.pageAction.show(tabId);
	}
});