
let menuItem = {"id": "Youtube","title": "Search on YouTube","contexts": ["selection"]}

chrome.contextMenus.create(menuItem)

chrome.contextMenus.onClicked.addListener(
    function(clickData){
        let YtUrl = "https://www.youtube.com/results?search_query=" + clickData.selectionText
        let createData = {"url": YtUrl,"type": "normal","top": 5,"left": 5,"width": 1000,"height": 1000}              
        chrome.windows.create(createData)      
    }
)




