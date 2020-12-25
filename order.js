var body = {
    fundType: 1,
    largeSpreadRate: 0,
    leverTimes: 1,                  // đòn bẫy
    margin: 100,                   // vol order
    marginCoinName: "VST",          // loại tiền
    marketFactor: 1.017059,
    orderType: 1,                // kiểu order 0 = long , 1 = short

    profitLossRateDto: {
        stopProfitPrice: -1,
        stopLossRate: -1
    },
    quotationCoinId: 1,
    spreadRate: 0.00051861,           // khả năng em ko order dc là do cái này, phải gửi thread đúng thì nó mới cho mình order, em ko biết tính sao ?
    stopLossPrice: -1,           // -1 = ko cài stoploss (nếu muốn order có set sẵn stoploss thì dùng)
    stopProfitPrice: -1,        // -1 = ko cài chốt (nếu muốn order có set sẵn chốt lời thì dùng)
    upRatio: 0.7737
};
body.price = "currentPrice"      // chỗ này thay giá muốn order vào




if (currentPrice != undefined) {     // validation giá ko rỗng thì call order
    var date = Date.now()
    date = String(date)

    fetch("https://api-app.cmlucky.com/api/v2/contract/order/open", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9,vi;q=0.8,ja;q=0.7",
            "app_version": "3.3.0",
            "appid": "30004",
            "authorization": "Authorizon",    // nhập key id (user token)
            "ccn": "official",
            "channel": "official",
            "content-type": "application/json",
            "device_id": "08e4ffa0-40d1-11eb-84a4-8372d1881aa7",
            "lang": "en",
            "mainappid": "10009",
            "platformid": "30",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "sign": "6D4C723AA6DDC79ED1969D0409819A59CF2A174E9438552A7EADEDF1DA0C169B",
            "timestamp": date
        },
        "referrer": "https://bingbon.pro/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": JSON.stringify(body),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(function (data) {
        console.log(data)
    });
}