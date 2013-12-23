//Fetches the price of BTC from Preev -- creates several variables for each different market it has.

//This script assumes that the contents of http://preev.com/pulse/source:bitstamp,btce,localbitcoins,mtgox/unit:btc,usd is loaded into the %HTTPD variable
prices = JSON.parse(global('HTTPD'));

//the JSON lists the numbers as strings, so we need to parse them all as numbers
bitstamp_btc = parseFloat(prices.markets.bitstamp.price);
bitstamp_vol = parseFloat(prices.markets.bitstamp.vol);
btce_btc = parseFloat(prices.markets.btce.price);
btce_vol = parseFloat(prices.markets.btce.vol);
localbitcoins_btc = parseFloat(prices.markets.localbitcoins.price);
localbitcoins_vol = parseFloat(prices.markets.localbitcoins.vol);
mtgox_btc = parseFloat(prices.markets.mtgox.price);
mtgox_vol = parseFloat(prices.markets.mtgox.vol);

//If you want the price to be in mBTC instead of BTC, simply set the %BTCUNITS variable in tasker to mBTC. 
if (global('BTCUNITS') == 'mBTC')  {
	setGlobal('BITSTAMP_BTC', bitstamp_btc / 1000);
	setGlobal('BITSTAMP_VOL', bitstamp_vol * 1000);
	setGlobal('BTCE_BTC', btce_btc / 1000);
	setGlobal('BTCE_VOL', btce_vol * 1000);
	setGlobal('LOCALBITCOINS_BTC', localbitcoins_btc / 1000);
	setGlobal('LOCALBITCOINS_VOL', localbitcoins_vol * 1000);
	setGlobal('MTGOX_BTC', mtgox_btc / 1000);
	setGlobal('MTGOX_VOL', mtgox_vo * 1000);	
}

else {
	setGlobal('BITSTAMP_BTC', bitstamp_btc);
	setGlobal('BITSTAMP_VOL', bitstamp_vol);
	setGlobal('BTCE_BTC', btce_btc);
	setGlobal('BTCE_VOL', btce_vol);
	setGlobal('LOCALBITCOINS_BTC', localbitcoins_btc);
	setGlobal('LOCALBITCOINS_VOL', localbitcoins_vol);
	setGlobal('MTGOX_BTC', mtgox_btc);
	setGlobal('MTGOX_VOL', mtgox_vol);	
	setGlobal('BTCUNITS', 'BTC');
}


