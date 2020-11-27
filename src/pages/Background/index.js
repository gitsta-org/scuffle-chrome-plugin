import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

var contextMenuItem = {
  id: 'scuffle',
  title: 'scuffle',
  contexts: ['selection'],
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.create({
  title: 'Add a bookmark',
  parentId: 'scuffle',
  id: 'bookmark',
  contexts: ['selection'],
});

console.log('hi');

chrome.contextMenus.onClicked.addListener(function (info, tabs) {
  if (info.menuItemId === 'bookmark') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { message: 'create-bookmark' });
    });
  }
});
