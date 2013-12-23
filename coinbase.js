//Coinbase.js, parses Coinbase API data from tasker.
//We're parsing the saved data from coinbase (https://coinbase.com/api/v1/prices/spot_rate) that should be in the %HTTPD variable. Simple usage, just use %CURRENTBTC as a variable in tasker.
btc = JSON.parse(global('HTTPD'));
setGlobal('CURRENTBTC', btc.amount);

//If you want the price to be in mBTC instead of BTC, simply set the %BTCUNITS variable in tasker to mBTC. 

//Use CURRENTBTC for price if you're using mBTC or if you want flexibility between BTC/mBTC

if (global('BTCUNITS') == 'mBTC')  {
	mBTC = btc.amount / 1000;
	setGlobal('CURRENTPRICE', mBTC);
}

else {
	setGlobal('CURRENTPRICE', btc.amount);
    setGlobal('BTCUNITS', 'BTC');
}


