var util = require('./util.js');
var api = require('../config/api.js');

function getCartNum(newCartGoodsCount) {
    if (newCartGoodsCount) {
        wx.setTabBarBadge({
            index: 2,
            text: newCartGoodsCount
        })
    } else {
        util.request(api.CartGoodsCount).then(function (res) {
            if (res.errno === 0) {
                let cartGoodsCount = '';
                if (res.data.cartTotal.goodsCount == 0) {
                    wx.removeTabBarBadge({
                        index: 2,
                    })
                } else {
                    cartGoodsCount = res.data.cartTotal.goodsCount + '';
                    wx.setTabBarBadge({
                        index: 2,
                        text: cartGoodsCount
                    })
                }
            }
        });
    }
}

module.exports = {
    getCartNum
}