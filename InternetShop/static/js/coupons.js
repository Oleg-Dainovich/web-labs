const priceForm = document.getElementById('total_price');
const oldPrice = priceForm.textContent;
const couponForm = document.getElementById('coupon-form');
const couponInput = document.getElementById('coupon-input');

let discountPercent = 0;

const coupons = new Map([
    ["zooshop", { percents: 50 }],
    ["papa", { percents: 20 }],
    ["gg", { percents: 10, expired: true }],
]);

couponInput.addEventListener('change', function() {
    enteredCoupon = this.value;
    const discount = coupons.get(enteredCoupon);

    if (!discount) {
        couponForm.textContent = "Coupon not found";
        discountPercent = 0;
        updatePrice();
        return;
    }
    if (discount.expired) {
        couponForm.textContent = "Coupon expired...";
        discountPercent = 0;
        updatePrice();
        return;
    }   

    discountPercent = discount.percents || 0;
    couponForm.textContent = "Coupon applied!";
    updatePrice();
});

function updatePrice() {
    priceForm.textContent = oldPrice * (1 - discountPercent / 100);
}
