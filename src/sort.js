// Declare variables for mock data
var csv =
`category,class,symbol,alias,account,account_type,account_currency,market_value
US Stocks,equity,BA,BOEING COMPANY,XXXSSSA,rrsp,cad,229.29
`;

function sortCsv (csvStr) { 	
// Capture the keys from header row
csvRowsArray = csvStr.split('\n');
keys = csvRowsArray[0].split(',');

// Build an array of rows as objects 
objectRowsArray = [];
csvRowsArray.forEach((element, index) => {
  // Skip header row (index=0) and blank rows
  if (index > 0 && csvRowsArray[index] != '') {
    // Create array for row
    var row = csvRowsArray[index].split(',');
    // Create object to be populated with data from row array
    var rowObject = {};
    // Create object properties from keys and populate with row array data
    keys.forEach((key, index) => { 
      rowObject[key] = row[index];
    });
    // Index=0 is skipped (it is header row)
    objectRowsArray[index -1] = rowObject;
  };
});
sortedObjectArray = objectRowsArray.sort(dynamicSortMultiple("account","-class","symbol"));
sortedCsv = objectArrayToCsv(sortedObjectArray);


// console.log(objectRowsArray[0].account);
// objectRowsArray.sort((a,b) => (a.account > b.account) ? 1 : ((b.account > a.account) ? -1 : 0));
console.log(objectRowsArray);
console.log(sortedCsv);


// Sort array of objects on object properties?

// For each account
// for each class 
	// sort symbol
// sort classs
// sort account


// convert sorted JSON to sorted csv

// return sorted csv string
};

function objectArrayToCsv(objectRowsArray) {
    // Set formats
    var columnDelimiter = ',';
    var lineDelimiter = '\n';
    var csvStr = "";

    // Create header row
    firstRowObject = objectRowsArray[0];
    Object.keys(firstRowObject).forEach((value, index) => {
		if( (index > 0) && (index < Object.keys(firstRowObject).length) ) {
			csvStr += columnDelimiter;
		};
		csvStr += value;
    });
    csvStr += lineDelimiter;

    // For each object in the array
	objectRowsArray.forEach((entry, index) => {
		// loop through object properties, add to csvStr with separator
		Object.values(entry).forEach((value, index) => {
			// Do not add column delimiter before first column
			if( (index > 0) && (index < Object.keys(entry).length) ) {
				csvStr += columnDelimiter;
			};
			// Add value to row string 
			csvStr += value;
		});
		// Add row delimiter to row string
		csvStr += lineDelimiter;
	});
	return csvStr;
};	


function dynamicSortMultiple() {
    /*
     * save the arguments object as it will be overwritten
     * note that arguments object is an array-like object
     * consisting of the names of the properties to sort by
     */
    var props = arguments;
    return function (obj1, obj2) {
        var i = 0, result = 0, numberOfProperties = props.length;
        /* try getting a different result from 0 (equal)
         * as long as we have extra properties to compare
         */
        while(result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    }
}

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}


