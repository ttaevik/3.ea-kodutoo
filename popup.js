const myTabs = {};
chrome.windows.getLastFocused(
  {
    "populate":true
  }, function(windows){
    let openTabs = windows.tabs;
   myTabs.result = openTabs;
    //console.log("openTabs are", openTabs)
  }
);

let save = document.getElementById('saveurl');


save.onclick = function() {
  let openTabs = [];
  openTabs = myTabs.result;
  let urls = []; 
  for(i = 0 ; i < openTabs.length; i++){
    let nTab = openTabs[i];
    let nUrl = nTab.url;
    urls.push(nUrl);
  }
  chrome.storage.sync.set({urlArray: urls}, function(){});    
};

let show = document.getElementById('showurl');
show.onclick = function() {
  let urls = []; 
  chrome.storage.sync.get(['urlArray'],function(result){
      let currentUrls = result.urlArray;
      urls = currentUrls;
      let specs = {url: urls};
      chrome.windows.create(specs, function(done){
        console.log('success');
      });
      for(i = 0; i < urls.length; i++){
        console.log(urls[i]);
      }
    }) 
  };
