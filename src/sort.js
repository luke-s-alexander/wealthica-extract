// Declare variables for mock data
var csv =
`category,class,symbol,alias,account,account_type,account_currency,market_value
US Stocks,equity,BA,BOEING COMPANY,07XJH9S,rrsp,cad,209.19
Bonds,fixed_income,TDB909,TD CD BD IDX-E SE/NL'FRAC,07XJH9S,rrsp,cad,578.35
Bonds,fixed_income,TDB909,TD CD BD IDX-E SE/NL'FRAC,117YH6J,tfsa,cad,4735.56
Canadian Stocks,equity,TDB900,TD CDN INDX -E /NL'FRAC,07XJH9S,rrsp,cad,10811.89
Canadian Stocks,equity,TDB900,TD CDN INDX -E /NL'FRAC,117YH6J,tfsa,cad,20820.01
International Stocks,equity,TDB911,TD INTL IDX E SER/NL'FRAC,07XJH9S,rrsp,cad,4032.51
International Stocks,equity,TDB911,TD INTL IDX E SER/NL'FRAC,117YH6J,tfsa,cad,7844.59
US Stocks,equity,TDB902,TD US INDX C$ -E /NL'FRAC,07XJH9S,rrsp,cad,7720.39
US Stocks,equity,TDB902,TD US INDX C$ -E /NL'FRAC,117YH6J,tfsa,cad,14580.67
US Stocks,equity,GTES,GATES INDUSTRIAL CORP PLC,07XJH9S,rrsp,cad,87.03
Cash,cash,Cash,null,07XJH9S,rrsp,cad,300.01
Cash,cash,Cash,null,117YH6J,tfsa,cad,200.01
`;

function sortCsv (csvStr) { 
// Convert csv to JSON
	// capture keys from header row
	csvRowsArray = csvStr.split('\n');
	keys = csvRowsArray[0].split(',');
	row1 = csvRowsArray[1].split(',');
	
	objectRowsArray = [];
	csvRowsArray.forEach((element, index) => {
		// Skip header row (index=0) and blank rows
		if (index > 0 && csvRowsArray[index] != '') {
			// create array for row
			var row = csvRowsArray[index].split(',');
			// create object to be populated with data from row array
			var rowObject = {};
			// Create object properties from keys and populate with row array data
			keys.forEach((key, index) => { 
				rowObject[key] = row[index];
			});
			// Index=0 is skipped (it is header row)
			objectRowsArray[index -1] = rowObject;
		};
	});
	var sortKeys = ['account', 'class', 'symbol'];

	objectRowsArray.sort(dynamicSortMultiple("account","-class","symbol"));

	// console.log(objectRowsArray[0].account);
	// objectRowsArray.sort((a,b) => (a.account > b.account) ? 1 : ((b.account > a.account) ? -1 : 0));
	console.log(objectRowsArray);


	// Sort array of objects on object properties?

// For each account
	// for each class 
		// sort symbol
	// sort classs
// sort account


// convert sorted JSON to sorted csv

// return sorted csv string

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


