const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr) {
		const temp = [];
		if (arr.length === 0) {
			return 1;
		}

		arr.forEach((el) => {
			let count = 1;
			if (Array.isArray(el)) {
				count += this.calculateDepth(el);
			}
			temp.push(count);
		});
		return temp.sort((a, b) => b - a)[0];
	}
}

const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5]));
// console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]));
console.log(depthCalc.calculateDepth([[[]]]));

module.exports = {
	DepthCalculator,
};
