import * as crypto from 'crypto';

const apiKey = "xpW2DQ7XHjrHm9D113h53Du1vPuKfr8lsxT5LXGh6UvYVyp4zT7KXqEpeRNLy4k7";
const apiSecret = "er0nlJSSFAt4cHhBWrue07jEw19kQXWMcfQbdPLmdd8SQwwkc0CsA0ZhSZF6bdcB";
const Url = `https://api.binance.com/api/v3/data?symbol=XRPUSDT&side=BUY&type=LIMIT&timeInForce=GTC&quantity=1&price=0.6&timestamp=${Date.now()}`;
console.log(Url)
const generateSignature = (queryString: string) => {
  return crypto.createHmac('sha256', apiSecret).update(queryString).digest('hex');
};

const placeSpotLimitOrder = async () => {
  const symbol = 'XRPUSDT';
  const side = 'BUY';
  const type = 'LIMIT';
  const timeInForce = 'GTC';
  const quantity = '1';
  const price = '0.6';
  const timestamp = Date.now();

  const params = new URLSearchParams();
  params.append('symbol', symbol);
  params.append('side', side);
  params.append('type', type);
  params.append('timeInForce', timeInForce);
  params.append('quantity', quantity);
  params.append('price', price);
  params.append('timestamp', timestamp.toString());


  const signature = generateSignature(params.toString());
  params.append('signature', signature);

  try {
    const response = await fetch(Url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-MBX-APIKEY': apiKey,
      },
      body: params,
    });
    console.log("response")
    console.log(response)
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }

};

const fetchData = async () => {
  try {
    const response = await fetch(Url);
    const data = await response.json();
    console.log(data);
    console.log("response")
    console.log(response)
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  await placeSpotLimitOrder();
  await fetchData()
})();
