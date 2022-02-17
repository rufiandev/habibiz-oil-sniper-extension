const mainScript = document.createElement('script');
mainScript.setAttribute("type", "module");
mainScript.setAttribute("src", chrome.extension.getURL('main.js'));
const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
head.insertBefore(mainScript, head.lastChild);

const web3library = document.createElement('script');
web3library.setAttribute("type", "module");
web3library.setAttribute("src", chrome.extension.getURL('web3.min.js'));
head.insertBefore(web3library, head.lastChild);

const iconUrlHidden = document.createElement('hidden');
iconUrlHidden.id = 'iconUrl';
iconUrlHidden.textContent = chrome.extension.getURL('icon.png');
head.insertBefore(iconUrlHidden, head.lastChild);