chrome.runtime.onMessage.addListener(function (msg, sndr, sendRes){
	console.log('shcHelper Log: '+msg.action);
	sendRes({party: "success"});
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	var domain = tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[1];
	console.log('SHCHelper Log: shcHelper.js domain = '+domain);
	if (domain=='www.sears.com' || domain=='www.kmart.com' || domain=='staging.ch4.intra.sears.com' || domain=='staging.ch4.intra.kmart.com' || domain=='sears.com' || domain=='kmart.com') {
		console.log('SHCHelper Log: Showing icon');
		chrome.pageAction.show(tabId);
	}
});