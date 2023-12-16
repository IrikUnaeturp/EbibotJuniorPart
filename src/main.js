"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var binance_api_node_1 = require("binance-api-node");
var fs = require("fs");
var creds = JSON.parse(fs.readFileSync('creds.json', 'utf8'));
var client = (0, binance_api_node_1.default)({
    "apiKey": "fPUE3BDEhIbfKyNpRbHz6VQ6zzcQiqB9MuqyNaElb2QvmUl1RkfGhKrl2QA7KFE8",
    "apiSecret": "ZcVeRjWzyOYsMUf35GOwPbZhyEOXoJ9tgx2wDAzDX25ixJBhDh2JjBVSgVLGZtmi"
});
var baseUrl = 'https://fapi.binance.com';
var getFuturesBTCUSDTBalance = function () { return __awaiter(void 0, void 0, void 0, function () {
    var futuresAccountBalance, btcusdtFuturesBalance;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, client.futuresAccountBalance()];
            case 1:
                futuresAccountBalance = _b.sent();
                btcusdtFuturesBalance = parseFloat(((_a = futuresAccountBalance.find(function (b) { return b.asset === 'BTCUSDT'; })) === null || _a === void 0 ? void 0 : _a.balance) || '0');
                return [2 /*return*/, btcusdtFuturesBalance];
        }
    });
}); };
// Precision data
var precisionsFutures = {
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
var adjustPrecision = function (value, precision) {
    return parseFloat(value.toFixed(precision));
};
// Получение текущих ордеров
var getOpenOrders = function () { return __awaiter(void 0, void 0, void 0, function () {
    var orders, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, client.openOrders({
                        symbol: 'BTCUSDT',
                    })];
            case 1:
                orders = _a.sent();
                console.log('Open orders:', orders);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error('Error fetching open orders:', error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Получение текущих позиций
var getPositions = function () { return __awaiter(void 0, void 0, void 0, function () {
    var positions, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, client.futuresPositionRisk()];
            case 1:
                positions = _a.sent();
                console.log('Positions:', positions);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error('Error fetching positions:', error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Вызов функций для получения ордеров и позиций
getOpenOrders();
getPositions();
var cancelAllFuturesOrders = function (symbol) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, client.futuresCancelAllOpenOrders({ symbol: symbol })];
            case 1:
                response = _a.sent();
                console.log("All futures orders for ".concat(symbol, " have been cancelled"), response);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error("Error cancelling futures orders for ".concat(symbol, ":"), error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getLastClosedFuturesProfits = function (n) { return __awaiter(void 0, void 0, void 0, function () {
    var trades, aggregatedTrades, currentSymbol, currentIncome, _i, trades_1, trade, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, client.futuresIncome({ limit: n, incomeType: 'REALIZED_PNL' })];
            case 1:
                trades = _a.sent();
                aggregatedTrades = [];
                currentSymbol = '';
                currentIncome = 0;
                for (_i = 0, trades_1 = trades; _i < trades_1.length; _i++) {
                    trade = trades_1[_i];
                    // Check if the symbol is the same as the current one
                    if (trade.symbol === currentSymbol) {
                        // Accumulate the income
                        currentIncome += parseFloat(trade.income);
                    }
                    else {
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
                return [2 /*return*/, aggregatedTrades];
            case 2:
                error_4 = _a.sent();
                console.error('Error fetching closed futures positions:', error_4);
                throw error_4;
            case 3: return [2 /*return*/];
        }
    });
}); };
var openPosition = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var symbol, isLong, deltaTP, deltaSL, leverage, isIsolated, amountBTCUSDT, btcusdtAmount, btcusdtBalance, marketPrice, _a, precision, quantity, side, order, tpPrice, slPrice;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                symbol = options.symbol, isLong = options.isLong, deltaTP = options.deltaTP, deltaSL = options.deltaSL, leverage = options.leverage, isIsolated = options.isIsolated, amountBTCUSDT = options.amountBTCUSDT;
                if (!precisionsFutures[symbol]) {
                    throw new Error('Invalid symbol');
                }
                btcusdtAmount = amountBTCUSDT / leverage;
                return [4 /*yield*/, getFuturesBTCUSDTBalance()];
            case 1:
                btcusdtBalance = _b.sent();
                if (btcusdtAmount > btcusdtBalance) {
                    throw new Error('Insufficient BTCUSDT balance');
                }
                cancelAllFuturesOrders(symbol);
                // Set leverage
                return [4 /*yield*/, client.futuresLeverage({
                        symbol: symbol,
                        leverage: leverage,
                    })];
            case 2:
                // Set leverage
                _b.sent();
                _a = parseFloat;
                return [4 /*yield*/, client.prices({ symbol: symbol })];
            case 3:
                marketPrice = _a.apply(void 0, [(_b.sent())[symbol]]);
                precision = precisionsFutures[symbol];
                quantity = adjustPrecision(amountBTCUSDT / marketPrice, precision.amount);
                side = isLong ? 'BUY' : 'SELL';
                return [4 /*yield*/, client.futuresOrder({
                        symbol: symbol,
                        side: side,
                        type: 'MARKET',
                        quantity: quantity.toString(),
                    })];
            case 4:
                order = _b.sent();
                tpPrice = adjustPrecision(isLong ? marketPrice * (1 + deltaTP) : marketPrice * (1 - deltaTP), precision.price);
                slPrice = adjustPrecision(isLong ? marketPrice * (1 - deltaSL) : marketPrice * (1 + deltaSL), precision.price);
                // Place Take Profit and Stop Loss Orders
                return [4 /*yield*/, client.futuresOrder({
                        symbol: symbol,
                        side: isLong ? 'SELL' : 'BUY',
                        type: 'TAKE_PROFIT_MARKET',
                        stopPrice: tpPrice.toString(),
                        closePosition: 'true',
                    })];
            case 5:
                // Place Take Profit and Stop Loss Orders
                _b.sent();
                return [4 /*yield*/, client.futuresOrder({
                        symbol: symbol,
                        side: isLong ? 'SELL' : 'BUY',
                        type: 'STOP_MARKET',
                        stopPrice: slPrice.toString(),
                        closePosition: 'true',
                    })];
            case 6:
                _b.sent();
                // Implement Trailing Stop-Loss (if supported by Binance API)
                // ...
                return [2 /*return*/, order];
        }
    });
}); };
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
    .then(function (order) { return console.log('Position opened:', order); })
    .catch(function (error) { return console.error('Error:', error); });
getLastClosedFuturesProfits(40).then(console.log);
// getFuturesBTCUSDTBalance().then(console.log);
console.log('All arguments:', process.argv);
var _a = process.argv.slice(2), tradingSymbol = _a[0], isLong = _a[1];
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
        .then(function (order) { return console.log('Position opened:', order); })
        .catch(function (error) { return console.error('Error:', error); });
}
