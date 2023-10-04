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
  //use .match and global regex to build and array of indeces for matches
  return [];
}

module.exports = { linearSearch, globalLinearSearch };
