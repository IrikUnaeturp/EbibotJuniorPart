
import * as crypto from 'crypto';
//import fetch from 'node-fetch'
const ccxt = require('ccxt');


const apiKey = "xpW2DQ7XHjrHm9D113h53Du1vPuKfr8lsxT5LXGh6UvYVyp4zT7KXqEpeRNLy4k7";
const apiSecret = "er0nlJSSFAt4cHhBWrue07jEw19kQXWMcfQbdPLmdd8SQwwkc0CsA0ZhSZF6bdcB";

const placeSpotLimitOrder = async () => {
  const symbol = 'BTCUSDT';
  const side = 'BUY';
  const type = 'MARKET';
  const timeInForce = 'GTC';
  const quoteOrderQty = '10';
  //const price = '4500';
  const recvWindow = '5000';
  const timestamp = Date.now();

  const base_url = `https://api.binance.com`;// до этого была ссылка https://api.binance.com/api/v3/data
  const end_point = `/api/v3/order?symbol=BTCUSDT&side=BUY&type=MARKET&timeInForce=GTC&quoteOrderQty=10&recvWindow=5000&timestamp=${Date.now()}`
  const url = `${base_url}${end_point}`
console.log(url)
 const generateSignature = (queryString: string, apiSecret: string): string => {
    return crypto.createHmac('sha256', apiSecret).update(queryString).digest('hex');
  };
  
  const signature = generateSignature(url, apiSecret);
  

  const headers = {
    'X-MBX-APIKEY': apiKey,
  //'Content-Type': 'application/json'
  };
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      "symbol": symbol,
      "side": side,
      "type": type,
      "quoteOrderQty": quoteOrderQty,
      //"price": price,
      "timestamp": timestamp,
      "timeInForce": timeInForce,
      "recvWindow": recvWindow
    }),
    headers: headers
  });
  console.log('response',response);
  console.log(response.json())
};


 /*console.log(JSON.stringify({
    symbol:'BTCUSDT',
    side: 'BUY',
    type: 'LIMIT',
    quantity: '1',
    price: '42000',
    timestamp: Date.now(),
    timeInForce:'GTC',
    recvWindow: '5000'
  }))*/

 



(async () => {
  await placeSpotLimitOrder();
})();