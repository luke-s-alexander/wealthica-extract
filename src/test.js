var addon, addonOptions;

$(function () {
  addon = new Addon();

  addon.on('init', function (options) {
    // Dashboard is ready and is signaling to the add-on that it should
    // render using the passed in options (filters, language, etc.)
    addonOptions = options;
    $('button').removeAttr('disabled');
    showAddonData(addonOptions.data, true);
  }).on('update', function (options) {
    // Filters have been updated and Dashboard is passing in updated options
    addonOptions = _.extend(addonOptions, options);
    showAddonData(addonOptions.data);
  });

  $('#addTransaction').on('click', function () {
    $(this).attr('disabled', 'disabled');

    addon.addTransaction({
      description: "New transaction from Example Add-on"
    }).then(function (transaction) {
      $('#result').html('New transaction:<br><code>' + JSON.stringify(transaction) + '</code>');
    }).catch(function (err) {
      $('#result').html('Error:<br><code>' + err + '</code>');
    }).finally(function () {
      $('#addTransaction').removeAttr('disabled');
    });
  });

  $('#getAssetsCustom').on('click', function () {
    $(this).attr('disabled', 'disabled');

    addon.api.getPositions(getQueryFromOptions(addonOptions)).then(function (response) {
      $('#result').html('List Positions Result:<br><code>' + JSON.stringify(response, null, 2) + '</code>');
      exportAssetsCustomToCsvFile(response);
    }).catch(function (err) {
      $('#result').html('Error:<br><code>' + err + '</code>');
    }).finally(function () {
      $('#getAssetsCustom').removeAttr('disabled');
    });
  });

  $('#getTransactions').on('click', function () {
    $(this).attr('disabled', 'disabled');

    addon.api.getTransactions(getQueryFromOptions(addonOptions)).then(function (response) {
      $('#result').html('List Transactions Result:<br><code>' + JSON.stringify(response, null, 2) + '</code>');
      exportTransactionsToCsvFile(response);
    }).catch(function (err) {
      $('#result').html('Error:<br><code>' + err + '</code>');
    }).finally(function () {
      $('#getTransactions').removeAttr('disabled');
    });
  });

  $('#getPositions').on('click', function () {
    $(this).attr('disabled', 'disabled');

    addon.api.getPositions(getQueryFromOptions(addonOptions)).then(function (response) {
      $('#result').html('List Positions Result:<br><code>' + JSON.stringify(response, null, 2) + '</code>');
      exportPositionsToCsvFile(response);
    }).catch(function (err) {
      $('#result').html('Error:<br><code>' + err + '</code>');
    }).finally(function () {
      $('#getPositions').removeAttr('disabled');
    });
  });
  
  $('#getInstitutions').on('click', function () {
    $(this).attr('disabled', 'disabled');
    
    addon.api.getInstitutions(getQueryFromOptions(addonOptions)).then(function (response) {
      $('#result').html('List Institutions Result:<br><code>' + JSON.stringify(response, null, 2) + '</code>');
      exportInstitutionsToCsvFile(response);
    }).catch(function (err) {
       $('#result').html('Error:<br><code>' + err + '</code>'); 
    }).finally(function () {
      $('#getInstitutions').removeAttr('disabled');
    });
  });

  $('#getAssets').on('click', function () {
    $(this).attr('disabled', 'disabled');
    
    addon.api.getAssets(getQueryFromOptions(addonOptions)).then(function (response) {
      $('#result').html('List Assets Result:<br><code>' + JSON.stringify(response, null, 2) + '</code>');
    }).catch(function (err) {
       $('#result').html('Error:<br><code>' + err + '</code>'); 
    }).finally(function () {
      $('#getAssets').removeAttr('disabled');
    });
  });



  $('#saveData').on('click', function () {
    $(this).attr('disabled', 'disabled');
    var newData = $('#data').val();

    // Try parsing textarea value to a JSON object before passing to addon.saveData(data)
    try { newData = JSON.parse(newData) }
    catch (e) {
      $('#result').html('Error:<br><code>Data must be JSON</code>');
      $('#saveData').removeAttr('disabled');
      return;
    }

    addon.saveData(newData).catch(function (err) {
      $('#result').html('Error:<br><code>' + err + '</code>');
    }).finally(function () {
      $('#saveData').removeAttr('disabled');
    });
  });

  addon.on('postMessage', function (origin, message) {
  console.log(arguments);
  });

  addon.on('gotMessage', function (origin, message) {
  console.log(arguments);
  });

  // Show addon data in result box and optionally update the text input.
  function showAddonData(data, updateInput) {
    $('#result').html('Addon data:<br><code>' + JSON.stringify(data, null, 2) + '</code>');
    if (updateInput && data) {
      $('#data').val(JSON.stringify(data));
    }
  }

  // Compose a query object from the addon options to pass to the API calls.
  function getQueryFromOptions (options) {
    return {
      from: options.dateRangeFilter && options.dateRangeFilter[0],
      to: options.dateRangeFilter && options.dateRangeFilter[1],
      groups: options.groupsFilter,
      institutions: options.institutionsFilter,
      investments: options.investmentsFilter === 'all' ? null: options.investmentsFilter,
    }
  }
  // Parse Cash into CSV string
  function parseCashCustomToCsvFile(jsonData) {
    if(jsonData.length == 0) {
      return '';
    }
    // Create array of column headers
    let keys = [
        'category', 
        'class', 
        'symbol', 
        'alias', 
        'account',
        'account_type',
        'account_currency',
        // 'quantity',         -- Removed to simplify export file
        // 'book_value',       -- Removed to simplify export file
        'market_value', 
        // 'gain_percent',     -- Removed to simplify export file
        // 'gain_amount'       -- Removed to simplify export file
    ];
    // Set formats
    let columnDelimiter = ',';
    let lineDelimiter = '\n';
    // Build header
    let csvColumnHeader = keys.join(columnDelimiter);
    // Don't set column headers (assume it's set by parent function)
    let csvStr = "";
    var shared = []

    // Loop through position results
    jsonData.forEach(item => {
      // Don't print any data at the position level, but capture shared data
      shared = [ 
          'Cash', 
          'cash', 
          'Cash', 
           null 
      ];
      if(item.cash){
      	// Loop through investments for each position
      	item.investments.forEach(element => {
          var investment_data = [
            element.id,
            element.type,
            element.currency,
            // null,             -- Removed to simplify export file 
            // element.cash,     -- Removed to simplify export file
            element.cash, 
            // null,             -- Removed to simplify export file
            // null              -- Removed to simplify export file 
          ];
          // Add investment data to shared position data
          investment_data = shared.concat(investment_data);
          // Loop through investment data and create csv row
          if( (investment_data[9] != 0) ) {
            investment_data.forEach((entry, index) => {
              if( (index > 0) && (index < investment_data.length) ) {
                csvStr += columnDelimiter;
              };
              csvStr += entry;
            });
            csvStr += lineDelimiter
          };
        });
  	  };
    });
    return csvStr;
  };

  // Parse Assets (Institutions response) JSON object into CSV string
  async function parseAssetsCustomToCsvFile(jsonData) {
    try {
      // Check that data is returned
      if(jsonData.length == 0) {
            return '';
          };

      // Call the getInstitutions API for cash balances and set the function response to variable cashCsv
      let cashCsv = await addon.api.getInstitutions(getQueryFromOptions(addonOptions)).then(function (response){
       return parseCashCustomToCsvFile(response);
      }).catch(function (err) {
      console.log(err)
      });
      console.log(cashCsv);
      // Create array of column headers
      let keys = [
          'category', 
          'class', 
          'symbol', 
          'alias', 
          'account',
          'account_type',
          'account_currency',
          //'quantity',         -- Removed to simplify export file
          //'book_value',       -- Removed to simplify export file
          'market_value'
          //,'gain_percent',    -- Removed to simplify export file
          //'gain_amount'       -- Removed to simplify export file
      ];
      // Set formats
      let columnDelimiter = ',';
      let lineDelimiter = '\n';
      // Build header
      let csvColumnHeader = keys.join(columnDelimiter);
      let csvStr = csvColumnHeader + lineDelimiter;
      var shared = []
      // Loop through position results
      jsonData.forEach(item => {
        // Don't print any data at the position level, but capture shared data
        shared = [ 
            item.category, 
            item.class, 
            item.security.symbol, 
            item.security.aliases[0] 
        ];
        // Loop through investments for each position
        item.investments.forEach(element => {
          var investment = element.investment;

          	// Only capture row data if market_value is not zero
          	if(element.market_value) {
	          // split field investment into account, account_type and account_currency
	        	var parsedInvestment = investment.split(":");
	          	var investment_data = [
	              parsedInvestment,
              	  // parsedInvestment[0], // -- Removed (type portion) to simplify export file
              	  // parsedInvestment[1],    -- Removed (currency portion) to simplify export file
              	  // element.quantity,    -- Removed to simplify export file
              	  // element.book_value,  -- Removed to simplify export file
	              element.market_value
	              // , 
	              // element.gain_percent,-- Removed to simplify export file
	              // element.gain_amount  -- Removed to simplify export file
	          	];
	          	// Add investment data to shared position data
	          	investment_data = shared.concat(investment_data);
          	  	// Loop through investment data and create csv row      	  
              	investment_data.forEach((entry, index) => {
	              if( (index > 0) && (index < investment_data.length) ) {
	               	csvStr += columnDelimiter;
              	  };
                  csvStr += entry;
          	  	}); 
          	  	csvStr += lineDelimiter
          	};
        });
      });
      csvStr = csvStr.concat(cashCsv);
      return encodeURIComponent(csvStr);
    } catch (error) { 
      console.log(error)
    }
  };

  // Parse Positions JSON object into CSV string
  function parsePositionsToCsvFile(jsonData) {
    if(jsonData.length == 0) {
      return '';
    }
    // Create array of column headers
    let keys = [
        'category', 
        'class', 
        'symbol', 
        'alias', 
        'account',
        'account_type',
        'account_currency', 
        'quantity', 
        'book_value', 
        'market_value', 
        'gain_percent', 
        'gain_amount'
    ];
    // Set formats
    let columnDelimiter = ',';
    let lineDelimiter = '\n';
    // Build header
    let csvColumnHeader = keys.join(columnDelimiter);
    let csvStr = csvColumnHeader + lineDelimiter;
    var shared = []
    // Loop through position results
    jsonData.forEach(item => {
      // Don't print any data at the position level, but capture shared data
      shared = [ 
          item.category, 
          item.class, 
          item.security.symbol, 
          item.security.aliases[0] 
      ];
      // Loop through investments for each position
      item.investments.forEach(element => {
        var investment = element.investment;
        // split field investment into account, account_type and account_currency
        var parsedInvestment = investment.split(":");

        var investment_data = [
            parsedInvestment, 
            element.quantity, 
            element.book_value, 
            element.market_value, 
            element.gain_percent, 
            element.gain_amount
        ];
        // Add investment data to shared position data
        investment_data = shared.concat(investment_data);
        // Loop through investment data and create csv row
        investment_data.forEach((entry, index) => {
            if( (index > 0) && (index < investment_data.length) ) {
                csvStr += columnDelimiter;
            }
            csvStr += entry;
        });
        csvStr += lineDelimiter
      });
    });
    // Add cash balances

	    // Copied directly from the getInstitutions button above, for reference:
		    // addon.api.getInstitutions(getQueryFromOptions(addonOptions)).then(function (response) {
		    //   $('#result').html('List Institutions Result:<br><code>' + JSON.stringify(response, null, 2) + '</code>');
		    //   exportInstitutionsToCsvFile(response);
		    // }).catch(function (err) {
		    //    $('#result').html('Error:<br><code>' + err + '</code>'); 
		    // }).finally(function () {
		    //   $('#getInstitutions').removeAttr('disabled');
		    // });

	// Actual function for case balances:
	// Call the getInstitutions API for cash balances and set the function response to variable cashCsv
    var cashCsv = addon.api.getInstitutions(getQueryFromOptions(addonOptions)).then(function (response) {
    	// call the parse Institutions fn to get csv string back (not file):
      var csv = parseInstitutionsToCsvFile(response);
      // function returns the new csv file from parse Institutions
      // Check that csv is correct - Confirmed
      // console.log(csv);
      return csv;
    }).catch(function (err) {
    	// catch errors in console
    	console.log(err);
    });

    console.log(JSON.stringify(cashCsv));
    // var cashCsv = parseInstitutionsToCsvFile(cashJSON);
    // Add Institutions (cash) csv to the positions csv:
    csvStr = csvStr.concat(cashCsv);
   // return encodeURIComponent(csvStr.concat(cashCsv));
   return encodeURIComponent(csvStr);
  };

// Parse Institutions Cash into CSV string
  function parseInstitutionsToCsvFile(jsonData) {
    if(jsonData.length == 0) {
      return '';
    }
    // Create array of column headers
    let keys = [
        'category', 
        'class', 
        'symbol', 
        'alias', 
        'account',
        'account_type',
        'account_currency', 
        'quantity', 
        'book_value', 
        'market_value', 
        'gain_percent', 
        'gain_amount'
    ];
    // Set formats
    let columnDelimiter = ',';
    let lineDelimiter = '\n';
    // Build header
    let csvColumnHeader = keys.join(columnDelimiter);
    let csvStr = csvColumnHeader + lineDelimiter;
    var shared = []
    // Loop through position results
    jsonData.forEach(item => {
      // Don't print any data at the position level, but capture shared data
      shared = [ 
          'Cash', 
          null, 
         'Cash', 
          null 
      ];
      // Loop through investments for each position
      item.investments.forEach(element => {

        var investment_data = [
            element.id,
            element.type,
            element.currency, 
            null, 
            null, 
            element.cash, 
            null, 
            null
        ];
        // Add investment data to shared position data
        investment_data = shared.concat(investment_data);
        // Loop through investment data and create csv row
        if( (investment_data[9] != 0) ) {
          investment_data.forEach((entry, index) => {
              if( (index > 0) && (index < investment_data.length) ) {
                  csvStr += columnDelimiter;
              }
              csvStr += entry;
          });
          csvStr += lineDelimiter
        };
      });
    });
   return encodeURIComponent(csvStr);
  };



// Parse Transactions JSON object into CSV string
  function parseTransactionsToCsvFile(jsonData) {
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
  };
  // Parse Institutions JSON object into CSV string
  function exportCashCustomToCsvFile(jsonData) {
      let csvStr = parseCashCustomToCsvFile(jsonData);
      let dataUri = 'data:text/csv;charset=utf-8,'+ csvStr;
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours().toString() + today.getMinutes() + today.getSeconds();

      let exportFileDefaultName = 'cash_' + date + time + '.csv';

      let linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
  };
  // Parse JSON object into CSV string
  async function exportAssetsCustomToCsvFile(jsonData) {
      let csvStr = await parseAssetsCustomToCsvFile(jsonData);
      console.log(csvStr);
      let dataUri = 'data:text/csv;charset=utf-8,'+ csvStr;
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours().toString() + today.getMinutes() + today.getSeconds();

      let exportFileDefaultName = 'positions_' + date + time + '.csv';

      let linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
  };  
  // Parse JSON object into CSV string
  function exportTransactionsToCsvFile(jsonData) {
      let csvStr = parseTransactionsToCsvFile(jsonData);
      let dataUri = 'data:text/csv;charset=utf-8,'+ csvStr;
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours().toString() + today.getMinutes() + today.getSeconds();

      let exportFileDefaultName = 'transactions_' + date + time + '.csv';

      let linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
  };

  // Parse JSON object into CSV string
  function exportPositionsToCsvFile(jsonData) {
      let csvStr = parsePositionsToCsvFile(jsonData);
      let dataUri = 'data:text/csv;charset=utf-8,'+ csvStr;
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours().toString() + today.getMinutes() + today.getSeconds();

      let exportFileDefaultName = 'positions_' + date + time + '.csv';

      let linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
  };

  // Parse Institutions JSON object into CSV string
  function exportInstitutionsToCsvFile(jsonData) {
      let csvStr = parseInstitutionsToCsvFile(jsonData);
      let dataUri = 'data:text/csv;charset=utf-8,'+ csvStr;
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours().toString() + today.getMinutes() + today.getSeconds();

      let exportFileDefaultName = 'cash_' + date + time + '.csv';

      let linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
  };

});