//ltc.js, parses Lightcoin API data for use with tasker.

//It expects the content of https://www.mercadobitcoin.com.br/api/ticker_litecoin/ to be loaded.

ltc = JSON.parse(global('HTTPD'));
setGlobal('CURRENTLTC', ltc.ticker.last);



