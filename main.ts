
import * as crypto from 'crypto';


const client = ({
    apiKey: creds.key,
    apiSecret: creds.secret,
});

const placeSpotLimitOrder = async () => {
  const symbol = 'BTCUSDT';
  const side = 'BUY';
  const type = 'LIMIT';
  const timeInForce = 'GTC';
  const quantity = '1';
  const price = '45000';
  const recvWindow = '5000';
  const timestamp = Date.now();

  const url = `https://api.binance.com/sapi/wss`;// до этого была ссылка https://api.binance.com/api/v3/data
  console.log(url);
  const generateSignature = (url, apiSecret)=> {
    return crypto.createHmac('sha256', apiSecret).update(url).digest('hex');
  };
  
  const signature = generateSignature(url, apiSecret);
  console.log('Signature:', signature);

  const headers = {
    'X-MBX-APIKEY': apiKey,
    'Content-Type': 'application/json'
  };
console.log('response')
  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
    "symbol":'BTCUSDT',
    "side": 'BUY',
    "type": 'LIMIT',
    "quantity": 1,
    "price": 45000,
    "timestamp": Date.now(),
    "timeInForce":'GTC',
    "recvWindow": 5000
    })
  });
  console.log(response)

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

  /*const data = await response.json();
  console.log("response data:");
 console.log(data);*/

}

(async () => {
  await placeSpotLimitOrder();
})();