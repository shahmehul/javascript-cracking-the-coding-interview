/**
 * Created by mshah on 5/7/17.
 */
var rootA, rootB;
// recursive
function findNodeB(nodeA) {
	// Variable to store path up the DOM tree

	var travelPath = [];
	// Method to travel up the DOM tree and store path to exact node
	var establishPath = function(travelNode) {
		// If we have reached the top level node we want to return
		// otherwise we travel up another level on the tree
		if (travelNode === rootA) {
			return;
		} else {
			establishPath(travelNode.parentNode);
		}

		// We store the index of current child in our path
		var index = travelNode.parentNode.childNodes.indexOf(travelNode);
		travelPath.push(index);
	}

	var traverseTree = function(bTreeNode, path) {
		if(path.length === 0) {
			return bTreeNode;
		} else {
			traverseTree(bTreeNode.childNodes[path.pop()], path);
		}
	}

	establishPath(rootB, nodeA);

	return traverseTree(rootB, travelPath);
}

//iterative
function indexOf(arrLike, target) {
	return Array.prototype.indexOf.call(arrLike, target);
}

// Given a node and a tree, extract the nodes path
function getPath(root, target) {
	var current = target;
	var path = [];
	while(current !== root) {
		path.unshift(indexOf(current.parentNode.childNodes, current));
		current = current.parentNode;
	}
	return path;
}

// Given a tree and a path, let's locate a node
function locateNodeFromPath(root, path) {
	var current = root;
	for(var i = 0, len = path.length; i < len; i++) {
		current = current.childNodes[path[i]];
	}
	return current;
}

console.log(locateNodeFromPath(rootB, getPath(rootA, target)));
