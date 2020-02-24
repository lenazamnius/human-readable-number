module.exports = function toReadable (number) {
	const dg = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
	const tn = [
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen'
	];
	const tw = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
	let numStr = '';
	if (number === 0) {
		return 'zero';
	}
	else if (number > 100) {
		numStr = number + '';
	}
	else {
		numStr = number.toString().padStart(3, '0');
	}
	let tempArr = [];
	for (let i = 0; i < numStr.length; i++) {
		if (numStr[i] === '0') {
			tempArr = tempArr;
		}
		else {
			if (i === 0) {
				tempArr.push(dg[numStr[i] * 1]);
				tempArr.push('hundred');
			}
			else if (i === 1) {
				if (numStr[1] === '1') {
					tempArr.push(tn[numStr.slice(-1) * 1]);
					return tempArr.join(' ');
				}
				else {
					tempArr.push(tw[numStr[i] * 1]);
				}
			}
			else if (i === 2) {
				tempArr.push(dg[numStr[i] * 1]);
			}
		}
	}
	return tempArr.join(' ');
};
