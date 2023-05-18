const couponCodes = {
    DOMATO5: 5,
    DOMATO10: 10,
    DOMATO15: 15,
    DOMATO20: 20,
    DOMATO25: 25,
    DOMATO30: 30
};


export const getCoupon = (coupon) => {
    return couponCodes[coupon];
};