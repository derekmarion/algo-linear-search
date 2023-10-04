function linearSearch(searchTerm, arr) {
  for (let element of arr) {//iterate through array and compare to search term
    if (element === searchTerm) {
      return arr.indexOf(element);
    };
  };
  //return undefined if no match found
  return undefined;
}

function globalLinearSearch(searchTerm, arr) {
  output = [];
  for (i = 0; i < arr.length; i++) {//iterate through array and compare to search term. use for loop to track index values
    if (arr[i] === searchTerm) {
      output.push(i);
    };
  };
  if (output.length === 0) {//return output array of indices, or undefined if search term not found
    return undefined;
  };
  return output;
}

module.exports = { linearSearch, globalLinearSearch };
