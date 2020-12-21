//object functions
function size(obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
};

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}