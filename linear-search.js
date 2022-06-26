var given_array = [10,30,100,300,400,12];

var needle_item = 300;

function get_needle_item_by_linear_search(given_array, needle_item) {
	let needle_item_index = -1;
	for (let index = 0; index <= given_array.length; index++) {
		if (given_array[index] == needle_item) {
			needle_item_index = index;
			break;
		}
	}
	return needle_item_index;
}

console.log("If not found then result will return -1 else result will return correct index");
console.log(get_needle_item_by_linear_search(given_array, needle_item));