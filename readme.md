tasker-btc-prices
=================

A collection of scripts that make using the current price of bitcoin/litecoin in tasker easy. It can get data from [Coinbase](https://coinbase.com), [MtGox](https://mtgox.com), [BTC-E](https://btc-e.com/), [LocalBitcoins](https://localbitcoins.com/) or [BitStamp](https://www.bitstamp.net/).

Usage
==========

First, download the coinbase.js, ltc.js or preev.js files to the internal storage of your Android device. 

preev.js expects the contents of `http://preev.com/pulse/source:bitstamp,btce,localbitcoins,mtgox/unit:btc,usd` to be loaded into the variable `%HTTPD`. ltc.js expects `https://www.mercadobitcoin.com.br/api/ticker_litecoin/` to be loaded into `%HTTPD`. Coinbase.js expects `https://coinbase.com/api/v1/prices/spot_rate` to be loaded into the `%HTTPD` variable. This can be easily accomplished with the HTTP GET action in tasker. Simply put the respective URL into the `Server:Port` field when setting up the HTTP get action.

After the proper URL is loaded, use the JavaScript action and point it to either preev.js or coinbase.js, and the script will parse all of the data neatly.


Example tasks
===========

`coinbase_example.xml` and `preev_example.xml` are examples of tasks that fetch data from either coinbase or preev and execute the included scripts. These example tasks expect coinbase.js/preev.js to reside on the SD card root.

`ltc_example.xml` is set up to provide LTC info to a homescreen widget. To use this widget, install the XML file for the task (make sure ltc.js is on the internal storage root) and make a shortcut on the homescreen to the new task. 


Understanding the variables
===========

ltc.js is very basic at the moment, using only `%CURRENTLTC`, which is the last ticker price of litecoin.

Coinbase.js is much simpler than Preev.js. It uses three variables. 

* `%CURRENTBTC` is always the current price of bitcoin from coinbase. It will never be in mBTC.
* `%BTCUNITS` is set to BTC by default, but if it is set to mBTC, the script will output `%CURRENTPRICE` in mBTC.
* `%CURRENTPRICE` is the current price, which may or may not be in mBTC depending on the value of `%BTCUNITS`.

Preev.js gets data from many more sources so it produces many more variables.

* `%BTCUNITS` is set to BTC by default, but if it is set to mBTC, the script will output all below variables in mBTC.
* `%BITSTAMP_BTC` is the current price of BTC/mBTC on Bitstamp.
* `%BITSTAMP_VOL` is the current trade volume of BTC/mBTC on Bitstamp.
* `%BTCE_BTC` is the current price of BTC/mBTC on BTC-E.
* `%BTCE_VOL` is the current trade volume of BTC/mBTC on BTC-E.
* `%LOCALBITCOINS_BTC` is the current price of BTC/mBTC on LocalBitcoins.
* `%LOCALBITCOINS_VOL` is the current trade volume of BTC/mBTC on LocalBitcoins.
* `%MTGOX_BTC` is the current price of BTC/mBTC on Mt. Gox.
* `%MTGOX_VOL` is the current trade volume of BTC/mBTC on Mt. Gox.

Ideas for application
=============
Some current ways that I'm using these scripts on my Android device:

* Using a profile/task combination that sends me a notification if the price of Bitcoin is below/above a certain amounts
* Using the [Tasker DashClock Extension](https://play.google.com/store/apps/details?id=de.schluderer.apps.t2d&hl=en) to create a nice BTC widget to my lockscreen
* Periodically checking the price of BTC with a profile

License
========

All code in this repository is released under the MIT License.

Donate
=======

If this was useful to you, please consider donating BTC to 1HC633dgMgMdEDjRUarC5LrUeMFtBvMynG