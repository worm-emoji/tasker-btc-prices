//cryptsy-vtc.js, parses Cryptsy API data for use with tasker.
//We're parsing the saved data from cryptsy (http://pubapi.cryptsy.com/api.php?method=singlemarketdata&marketid=151) that should be in the %HTTPD variable. 
//Simple usage, use %CURRENTVTC as a variable in tasker.

result = JSON.parse(global('HTTPD'));
setGlobal('CURRENTVTC', result.return.market.vtc.lasttradeprice);
setGlobal('VTCVOL', result.return.market.vtc.volume);
