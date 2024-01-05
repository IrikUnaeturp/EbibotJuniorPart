
const { Spot } = require("@binance/connector")
require('dotenv').config({path: '../.env'})

const client = new Spot(process.env.binanceApiKey, process.env.binanceSecretKey,{
  baseURL:"https://testnet.binance.vision"
})

const placeMarketOrder = async () => {
  const order = await client.newOrder('BTCUSDT','BUY','MARKET',{
    quoteOrderQty: 100
  })
console.log(order.data)
}

const placeLimitOrder = async()=>{
  const order = await client.newOrder('BTCUSDT','BUY', 'LIMIT',{
    price: '43917',
    quantity: 1,
    timeInForce: 'GTC'
  })
  console.log(order)
}

placeLimitOrder()