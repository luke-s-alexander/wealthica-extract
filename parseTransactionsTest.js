async function loadJSON(filePath) {
  const response = await fetch(filePath);
  if (!response.ok) {
    throw new Error('Could not load JSON file');
  }
  return await response.json();
}

// Parse Transactions JSON object into CSV string
  function parseTransactionsToCsvFile(jsonData) {
    loadJSON('./transactions.json')
      .then(data => {
        console.log('JSON Data:', data);
      })
      .catch(error => {
        console.error('Error loading JSON:', error);
      });
      
    try {
      if(jsonData.length == 0) {
        return '';
      }
      // Create array of column headers
      let keys = [
          'account',
          'account_type',
          'account_currency', 
          'type', 
          'date', 
          'quantity',  
          'currency_amount',  
          'fee',
          'symbol', 
          'name'
      ];
      // Set formats
      let columnDelimiter = ',';
      let lineDelimiter = '\n';
      // Build header
      let csvColumnHeader = keys.join(columnDelimiter);
      let csvStr = csvColumnHeader + lineDelimiter;
      var row = [];
      // Loop through transaction results
      jsonData.forEach(item => {
        // Create row from transaction data
        let investment = item.investment;
        // split field investment into account, account_type and account_currency
        let parsedInvestment = investment.split(":");

        row = [  
            parsedInvestment,
            item.type,
            item.date,
            item.quantity,
            item.currency_amount,
            item.fee
        ];
        // Check to see if transaction references a security
        if(typeof item.security === "object") {
          // Add security data if available
          row = row.concat([
            item.security.symbol,
            item.security.name
          ]);
        } else {
          // Add null placeholders if no security data
          row.push(null, null)
        };
        // Loop through row data and create csv row
        row.forEach((entry, index) => {
            if( (index > 0) && (index < row.length) ) {
                csvStr += columnDelimiter;
            }
            csvStr += entry;
        });
        csvStr += lineDelimiter
      });
      return encodeURIComponent(csvStr);
    } catch(error) {
      console.error("Error in parseTransactionsToCsvFile:", error);
    }
  };
