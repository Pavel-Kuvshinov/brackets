module.exports = function check(str, bracketsConfig) {
	// This is my first and old decision
	/*
	let openBrackets= [];
	let closeBraclets = [];
	let openItem = '';
	let closeItem = '';
	let arrStr = str.split('');

	if (arrStr.length % 2 != 0){
		return false
	}

	for (let i = 0; i < bracketsConfig.length; i++){
		for (let j = 0; j < bracketsConfig[i].length; j++){
			if (j % 2 == 0){
				openBrackets.push(bracketsConfig[i][j]);
			} else {
				closeBraclets.push(bracketsConfig[i][j]);
			}
		}
	}

	for (let x = 0; x < arrStr.length; x++){
		openItem = openBrackets.indexOf(arrStr[x]);
		closeItem = closeBraclets.indexOf(arrStr[x+1]);
		if (openItem == closeItem && arrStr[x]==openBrackets[openItem]){
			arrStr.splice(x, 2);
			x = - 1;
		}
	}

	if (arrStr.length != 0){
		return false;
	}

	return true;
	*/

	// This is my second decision

	let arrStr = str.split('');
	if (arrStr.length % 2 != 0) return false;

	let openBrackets= [];
	let closeBraclets = [];
	bracketsConfig.forEach(element => {
		openBrackets.push(element[0]);
		closeBraclets.push(element[1]);
	});

	for (let x = 0; x < arrStr.length; x++){
		if (openBrackets.indexOf(arrStr[x]) >= 0 && arrStr[x+1] == closeBraclets[openBrackets.indexOf(arrStr[x])]) {
			arrStr.splice(x, 2);
			x = x - 2;
		}
	}

	if (arrStr.length != 0) return false;
	return true;
}