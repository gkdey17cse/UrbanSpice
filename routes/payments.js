const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();

const razorpay = new Razorpay({
    key_id: "rzp_live_n8YDWLNNngevE5",          // from Razorpay dashboard
    key_secret: "dQkQ3HWKSQ2BlhUHtN2fi8Ln"   // from Razorpay dashboard
});

router.post("/create-order", async (req, res) => {
    const { amount } = req.body;

    console.log("📦 Received amount from client:", amount);

    if (!amount || isNaN(amount)) {
        return res.status(400).send("Invalid amount");
    }

    try {
        const options = {
            amount: Math.round(amount), // ensure it's an integer in paise // must be converted * 100 to rupees
            currency: "INR",
            receipt: "receipt_order_" + Date.now(),
        };

        console.log("📤 Creating Razorpay order with options:", options);

        const order = await razorpay.orders.create(options);

        console.log("✅ Order created:", order.id);
        res.json(order);

    } catch (err) {
        console.error("❌ Razorpay Error:", err);
        res.status(500).send("Error creating order");
    }
});


module.exports = router;
