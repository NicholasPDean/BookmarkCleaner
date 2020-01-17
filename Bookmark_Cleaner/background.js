function DeleteEmptyFolders () {
	chrome.bookmarks.getTree(function(TreeNodes){
    	TreeNodes.forEach(function(item){
        	NodeLoop(item);
    	});
	});
}

function NodeLoop(node) {
    // recursively process child nodes
    if(node.children) {
        node.children.forEach(function(child) { NodeLoop(child); });
    }
    if(node.children == '') {
    	chrome.bookmarks.remove(node.id)
    }
}

chrome.browserAction.onClicked.addListener(DeleteEmptyFolders);