const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
	num = `${num}`.split("");
	console.log(num);
	let summ = num.reduce((acc, curr) => {
		return (acc += Number(curr));
	}, 0);

	if (`${summ}`.length >= 2) {
		return getSumOfDigits(summ);
	} else {
		return summ;
	}
}

module.exports = {
	getSumOfDigits,
};
