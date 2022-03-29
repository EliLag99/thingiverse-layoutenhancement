function adjustUrl(url) {
  const regex = /^.*:\/\/.*thingiverse\.com\/thing:\d*/;

  return url.match(regex) + "/zip";
}

async function handleMessage(request, sender, sendResponse) {
  if (request.action == "downloadZip") {
    console.log("Background says hi");
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      console.log(tabs);

      let newUrl = adjustUrl(tabs[0].url);

      chrome.tabs.update(tabs[0].id, { url: newUrl });
    });
  }
  sendResponse();
  return true;
}

chrome.runtime.onMessage.addListener(handleMessage);
