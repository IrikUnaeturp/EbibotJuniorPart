const { Spot } = require('@binance/connector')


const apiKey = "xpW2DQ7XHjrHm9D113h53Du1vPuKfr8lsxT5LXGh6UvYVyp4zT7KXqEpeRNLy4k7";
const apiSecret = "er0nlJSSFAt4cHhBWrue07jEw19kQXWMcfQbdPLmdd8SQwwkc0CsA0ZhSZF6bdcB";

const client = new Spot(apiKey, apiSecret,{
  baseURL: 'https://api.binance.com'
})

//Инфа об аккаунте
//client.account().then(response => client.logger.log(response.data))

const placeMarketOrder = async () => {
  const order = await client.newOrder('UNIUSDT','BUY','MARKET',{
    quoteOrderQty: 1
  })
console.log(order.data)
}

const placeLimitOrder = async()=> {
  const order = await client.newOrder('UNIUSDT','BUY', 'LIMIT',{
    price: '5.90',
    quantity: 1,
    timeInForce: 'GTC'
  })
  console.log(order)
}

placeLimitOrder()
