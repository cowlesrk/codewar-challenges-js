/* Challenge 1: Sum of two lowest positive integers

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19,5,42,2,77], the output should be 7. */

const numbers = [19, 5, 42, 2, 77];

const lowestNumber = Math.min(...numbers);
const highestNumber = Math.max(...numbers);

const secondLowest = (function() {
	for (var i = 0; i < numbers.length; i++){
		if (numbers[i] > lowestNumber && numbers[i] < highestNumber)
			return i;
	}
}());


document.write(lowestNumber);
document.write(highestNumber);
document.write(secondLowest);

const sum = lowestNumber + secondLowest;
document.write(sum);