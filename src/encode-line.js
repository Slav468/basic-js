const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	const strArr = str.split("");
	let newStr = "";
	let count = 1;
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i] === strArr[i + 1]) {
			count++;
		} else {
			newStr += `${count === 1 ? "" : count}` + strArr[i];
			count = 1;
		}
	}
	return newStr;
}

console.log(encodeLine("aaaatttt"));

module.exports = {
	encodeLine,
};
