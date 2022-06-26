var given_array = [10, 20, 30, 40, 55, 66, 70]; // For binary search given array must be sorted

var needle_item = 30;

function get_needle_item_by_binary_search(given_array, needle_item) {
	let needle_item_index = -1;

	let data_collection_length = given_array.length;

	let low = 0;
	let high = data_collection_length - 1;

	while (low <= high) {
		let mid_position = parseInt((low + high) / 2);

		if (given_array[mid_position] == needle_item) {
			needle_item_index = mid_position;
			break;
		}
		
		if (needle_item < given_array[mid_position]) {
			high = mid_position;
		}
		else {
			low = mid_position;
		}
	}

	return needle_item_index;
}

console.log("If item not found then result will return -1 else result will return correct index");
console.log(get_needle_item_by_binary_search(given_array, needle_item));