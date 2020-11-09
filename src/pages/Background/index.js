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

chrome.contextMenus.create({
  title: 'Add a note',
  parentId: 'scuffle',
  id: 'note',
  contexts: ['selection'],
});
