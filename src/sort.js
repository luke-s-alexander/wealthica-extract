function sortCsv (csvStr) { 
// Convert csv to JSON
	// capture keys from header row
	csvRowsArray = csvStr.split('\n');
	keys = csvRowsArray[0].split(',');
	console.log(keys);
	// create array 

// For each account
	// for each class 
		// sort symbol
	// sort classs
// sort account


// convert sorted JSON to sorted csv

// return sorted csv string

};

var csv = `category,class,symbol,alias,account,account_type,account_currency,market_value
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
