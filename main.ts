import fetch from 'node-fetch';
import createBinanceClient  from 'binance-api-node';
const fs = require('fs');

const creds = JSON.parse(fs.readFileSync('creds.json', 'utf8'));

const client = createBinanceClient ({
    apiKey: creds.key,
    apiSecret: creds.secret,
});

const baseUrl = 'https://fapi.binance.com';

const getFuturesBTCUSDTBalance = async () => {
    const futuresAccountBalance = await client.futuresAccountBalance();
    const btcusdtFuturesBalance = parseFloat(futuresAccountBalance.find(b => b.asset === 'BTCUSDT')?.balance || '0');
    return btcusdtFuturesBalance;
}

// Precision data
const precisionsFutures = {
    "BTCUSDT": { "price": 1, "amount": 3 },
    "ETHUSDT": { "price": 2, "amount": 3 },
    "BCHUSDT": { "price": 2, "amount": 3 },
    "XRPUSDT": { "price": 4, "amount": 1 },
    "EOSUSDT": { "price": 3, "amount": 1 },
    "LTCUSDT": { "price": 2, "amount": 3 },
    "TRXUSDT": { "price": 5, "amount": 0 },
    "ETCUSDT": { "price": 3, "amount": 2 },
    "LINKUSDT": { "price": 3, "amount": 2 },
    "XLMUSDT": { "price": 5, "amount": 0 },
    "ADAUSDT": { "price": 4, "amount": 0 },
    "XMRUSDT": { "price": 2, "amount": 3 },
    "DASHUSDT": { "price": 2, "amount": 3 },
    "ZECUSDT": { "price": 2, "amount": 3 },
    "XTZUSDT": { "price": 3, "amount": 1 },
    "BNBUSDT": { "price": 2, "amount": 2 },
    "ATOMUSDT": { "price": 3, "amount": 2 },
    "ONTUSDT": { "price": 4, "amount": 1 },
    "IOTAUSDT": { "price": 4, "amount": 1 },
    "BATUSDT": { "price": 4, "amount": 1 },
    "VETUSDT": { "price": 5, "amount": 0 },
    "NEOUSDT": { "price": 3, "amount": 2 },
    "QTUMUSDT": { "price": 3, "amount": 1 },
    "IOSTUSDT": { "price": 6, "amount": 0 },
    "THETAUSDT": { "price": 3, "amount": 1 },
    "ALGOUSDT": { "price": 4, "amount": 1 },
    "ZILUSDT": { "price": 5, "amount": 0 },
    "KNCUSDT": { "price": 3, "amount": 0 },
    "ZRXUSDT": { "price": 4, "amount": 0 },
    "COMPUSDT": { "price": 2, "amount": 3 },
    "OMGUSDT": { "price": 3, "amount": 1 },
    "DOGEUSDT": { "price": 5, "amount": 0 },
    "SXPUSDT": { "price": 4, "amount": 1 },
    "KAVAUSDT": { "price": 4, "amount": 1 },
    "BANDUSDT": { "price": 4, "amount": 1 },
    "RLCUSDT": { "price": 4, "amount": 1 },
    "WAVESUSDT": { "price": 3, "amount": 1 },
    "MKRUSDT": { "price": 1, "amount": 3 },
    "SNXUSDT": { "price": 3, "amount": 1 },
    "DOTUSDT": { "price": 3, "amount": 1 },
    "YFIUSDT": { "price": 0, "amount": 3 },
    "BALUSDT": { "price": 3, "amount": 1 },
    "CRVUSDT": { "price": 3, "amount": 1 },
    "TRBUSDT": { "price": 2, "amount": 1 },
    "YFIIUSDT": { "price": 0, "amount": 3 },
    "RUNEUSDT": { "price": 3, "amount": 0 },
    "SUSHIUSDT": { "price": 3, "amount": 0 },
    "SRMUSDT": { "price": 3, "amount": 0 },
    "EGLDUSDT": { "price": 2, "amount": 1 },
    "SOLUSDT": { "price": 2, "amount": 0 },
    "ICXUSDT": { "price": 4, "amount": 0 },
    "STORJUSDT": { "price": 4, "amount": 0 },
    "BLZUSDT": { "price": 5, "amount": 0 },
    "UNIUSDT": { "price": 3, "amount": 0 },
    "AVAXUSDT": { "price": 2, "amount": 0 },
    "FTMUSDT": { "price": 4, "amount": 0 },
    "HNTUSDT": { "price": 3, "amount": 0 },
    "ENJUSDT": { "price": 4, "amount": 0 },
    "FLMUSDT": { "price": 4, "amount": 0 },
    "TOMOUSDT": { "price": 4, "amount": 0 },
    "RENUSDT": { "price": 4, "amount": 0 },
    "KSMUSDT": { "price": 2, "amount": 1 },
    "NEARUSDT": { "price": 3, "amount": 0 },
    "AAVEUSDT": { "price": 2, "amount": 1 },
    "FILUSDT": { "price": 3, "amount": 1 },
    "RSRUSDT": { "price": 6, "amount": 0 },
    "LRCUSDT": { "price": 4, "amount": 0 },
    "MATICUSDT": { "price": 4, "amount": 0 },
    "OCEANUSDT": { "price": 5, "amount": 0 },
    "CVCUSDT": { "price": 5, "amount": 0 },
    "BELUSDT": { "price": 4, "amount": 0 },
    "CTKUSDT": { "price": 3, "amount": 0 },
    "AXSUSDT": { "price": 2, "amount": 0 },
    "ALPHAUSDT": { "price": 4, "amount": 0 },
    "ZENUSDT": { "price": 3, "amount": 1 },
    "SKLUSDT": { "price": 5, "amount": 0 },
    "GRTUSDT": { "price": 5, "amount": 0 },
    "1INCHUSDT": { "price": 4, "amount": 0 },
    "AKROUSDT": { "price": 5, "amount": 0 },
    "CHZUSDT": { "price": 5, "amount": 0 },
    "SANDUSDT": { "price": 4, "amount": 0 },
    "ANKRUSDT": { "price": 5, "amount": 0 },
    "LUNAUSDT": { "price": 3, "amount": 0 },
    "BTSUSDT": { "price": 5, "amount": 0 },
    "LITUSDT": { "price": 3, "amount": 1 },
    "UNFIUSDT": { "price": 3, "amount": 1 },
    "DODOUSDT": { "price": 3, "amount": 1 },
    "REEFUSDT": { "price": 6, "amount": 0 },
    "RVNUSDT": { "price": 5, "amount": 0 },
    "SFPUSDT": { "price": 4, "amount": 0 },
    "XEMUSDT": { "price": 4, "amount": 0 },
    "COTIUSDT": { "price": 5, "amount": 0 },
    "CHRUSDT": { "price": 4, "amount": 0 },
    "MANAUSDT": { "price": 4, "amount": 0 },
    "ONEUSDT": { "price": 5, "amount": 0 },
    "HOTUSDT": { "price": 6, "amount": 0 },
    "ALICEUSDT": { "price": 3, "amount": 1 },
    "HBARUSDT": { "price": 5, "amount": 0 },
    "LINAUSDT": { "price": 5, "amount": 0 },
    "STMXUSDT": { "price": 5, "amount": 0 },
    "DENTUSDT": { "price": 6, "amount": 0 },
    "CELRUSDT": { "price": 5, "amount": 0 },
    "MTLUSDT": { "price": 4, "amount": 0 },
    "OGNUSDT": { "price": 4, "amount": 0 },
    "NKNUSDT": { "price": 5, "amount": 0 },
    "SCUSDT": { "price": 6, "amount": 0 },
    "DGBUSDT": { "price": 5, "amount": 0 },
    "ICPUSDT": { "price": 2, "amount": 2 },
    "BAKEUSDT": { "price": 4, "amount": 0 },
    "GTCUSDT": { "price": 3, "amount": 1 },
    "TLMUSDT": { "price": 4, "amount": 0 },
    "IOTXUSDT": { "price": 5, "amount": 0 },
    "AUDIOUSDT": { "price": 4, "amount": 0 },
    "RAYUSDT": { "price": 3, "amount": 1 },
    "C98USDT": { "price": 4, "amount": 0 },
    "MASKUSDT": { "price": 3, "amount": 0 },
    "ATAUSDT": { "price": 4, "amount": 0 },
    "DYDXUSDT": { "price": 3, "amount": 1 },
    "GALAUSDT": { "price": 5, "amount": 0 },
    "CELOUSDT": { "price": 3, "amount": 1 },
    "ARUSDT": { "price": 3, "amount": 1 },
    "KLAYUSDT": { "price": 4, "amount": 1 },
    "ARPAUSDT": { "price": 5, "amount": 0 },
    "CTSIUSDT": { "price": 4, "amount": 0 },
    "LPTUSDT": { "price": 3, "amount": 2 },
    "ENSUSDT": { "price": 3, "amount": 1 },
    "PEOPLEUSDT": { "price": 5, "amount": 0 },
    "ANTUSDT": { "price": 3, "amount": 1 },
    "ROSEUSDT": { "price": 5, "amount": 0 },
    "DUSKUSDT": { "price": 5, "amount": 0 },
    "FLOWUSDT": { "price": 3, "amount": 0 },
    "IMXUSDT": { "price": 4, "amount": 0 },
    "API3USDT": { "price": 3, "amount": 1 },
    "ANCUSDT": { "price": 3, "amount": 1 },
    "GMTUSDT": { "price": 4, "amount": 0 },
    "APEUSDT": { "price": 3, "amount": 0 }
};
  
  interface OpenPositionOptions {
    symbol: string;
    isLong: boolean;
    deltaTP: number;
    deltaSL: number;
    leverage: number;
    isIsolated: boolean;
    amountBTCUSDT: number;
  }
  
const adjustPrecision = (value: number, precision: number): number => {
    return parseFloat(value.toFixed(precision));
}

const cancelAllFuturesOrders = async (symbol: string) => {
    try {
        const response = await client.futuresCancelAllOpenOrders({ symbol: symbol });
        console.log(`All futures orders for ${symbol} have been cancelled`, response);
    } catch (error) {
        console.error(`Error cancelling futures orders for ${symbol}:`, error);
    }
}

const getLastClosedFuturesProfits = async (n: number) => {
    try {
        const trades = await client.futuresIncome({ limit: n, incomeType: 'REALIZED_PNL' });

        const aggregatedTrades: {symbol: string, totalIncome: string}[] = [];
        let currentSymbol = '';
        let currentIncome = 0;

        for (const trade of trades) {
            // Check if the symbol is the same as the current one
            if (trade.symbol === currentSymbol) {
                // Accumulate the income
                currentIncome += parseFloat(trade.income);
            } else {
                // If the symbol has changed, push the previous symbol's aggregated data
                if (currentSymbol !== '') {
                    aggregatedTrades.push({
                        symbol: currentSymbol,
                        totalIncome: currentIncome.toFixed(5)
                    });
                }
                // Reset for the new symbol
                currentSymbol = trade.symbol;
                currentIncome = parseFloat(trade.income);
            }
        }

        // Don't forget to add the last accumulated symbol
        if (currentSymbol !== '') {
            aggregatedTrades.push({
                symbol: currentSymbol,
                totalIncome: currentIncome.toFixed(5)
            });
        }

        return aggregatedTrades;
    } catch (error) {
        console.error('Error fetching closed futures positions:', error);
        throw error;
    }
};
  
const openPosition = async (options: OpenPositionOptions) => {
    const { symbol, isLong, deltaTP, deltaSL, leverage, isIsolated, amountBTCUSDT } = options;

    if (!precisionsFutures[symbol]) {
        throw new Error('Invalid symbol');
    }

    const btcusdtAmount = amountBTCUSDT / leverage;
    const btcusdtBalance = await getFuturesBTCUSDTBalance();

    if (btcusdtAmount > btcusdtBalance) {
        throw new Error('Insufficient BTCUSDT balance');
    }

    cancelAllFuturesOrders(symbol);
    
    // Set leverage
    await client.futuresLeverage({
      symbol: symbol,
      leverage: leverage,
    });
  
    // Fetch current price
    const marketPrice = parseFloat((await client.prices({ symbol: symbol }))[symbol]);
    const precision = precisionsFutures[symbol];

    const quantity = adjustPrecision(amountBTCUSDT / marketPrice, precision.amount);
  
    // Determine order side based on isLong
    const side = isLong ? 'BUY' : 'SELL';
  
    // Open a new position
    const order = await client.futuresOrder({
        symbol: symbol,
        side: side,
        type: 'MARKET',
        quantity: quantity.toString(),
    });
  
    // Calculate Take Profit and Stop Loss Prices
    const tpPrice = adjustPrecision(isLong ? marketPrice * (1 + deltaTP) : marketPrice * (1 - deltaTP), precision.price);
    const slPrice = adjustPrecision(isLong ? marketPrice * (1 - deltaSL) : marketPrice * (1 + deltaSL), precision.price);
  
    // Place Take Profit and Stop Loss Orders
    await client.futuresOrder({
      symbol: symbol,
      side: isLong ? 'SELL' : 'BUY',
      type: 'TAKE_PROFIT_MARKET',
      stopPrice: tpPrice.toString(),
      closePosition: 'true',
    });
  
    await client.futuresOrder({
      symbol: symbol,
      side: isLong ? 'SELL' : 'BUY',
      type: 'STOP_MARKET',
      stopPrice: slPrice.toString(),
      closePosition: 'true',
    });
  
    // Implement Trailing Stop-Loss (if supported by Binance API)
    // ...
  
    return order;
}
  
  // Example usage
openPosition({
    symbol: 'BTCUSDT',
    isLong: false,
    deltaTP: 0.008,
    deltaSL: 0.008,
    leverage: 5,
    isIsolated: true,
    amountBTCUSDT: 200, // Amount of BTCUSDT to spend
})
.then(order => console.log('Position opened:', order))
.catch(error => console.error('Error:', error));
getLastClosedFuturesProfits(40).then(console.log);

// getFuturesBTCUSDTBalance().then(console.log);

console.log('All arguments:', process.argv);

const [tradingSymbol, isLong] = process.argv.slice(2);
console.log('Extracted args:', tradingSymbol, isLong);

if (tradingSymbol) {
    openPosition({
        symbol: tradingSymbol,
        isLong: isLong === 'true',
        deltaTP: 0.008,
        deltaSL: 0.008,
        leverage: 5,
        isIsolated: true,
        amountBTCUSDT: 200, // Amount of BTCUSDT to spend
    })
    .then(order => console.log('Position opened:', order))
    .catch(error => console.error('Error:', error));
}
const params = new URLSearchParams();
params.append('symbol', 'BTCUSDT');
params.append('side', 'BUY');
params.append('type', 'LIMIT');
params.append('timeInForce', 'GTC');
params.append('quantity', '0.01');
params.append('price', '40000.0');
params.append('recvWindow', '5000');
params.append('timestamp', '253402300799000');
params.append('signature', '2d24a314');

fetch.post('https://api.binance.com/api/v3/order', params, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });