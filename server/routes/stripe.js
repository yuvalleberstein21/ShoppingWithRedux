const router = require("express").Router();
const stripe = require("stripe")('sk_test_51Nh66tLzupgPvagx6ffFsi9PUdFNfVKqzqLnRYB02GIXQXoNTs1SQQ6HAtY8sj7OuwoWamAKM7jKhQXoBl7EGGhk004rt83wBb');

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "USD",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});




module.exports = router;