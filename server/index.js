const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/products');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const checkoutRoute = require('./routes/stripe');
const cors = require('cors');


const bodyParser = require('body-parser');

dotenv.config();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


mongoose.connect(process.env.MONGO_URL
).then(() => console.log("Connected to MongoDB")).catch((err) => { console.log(err) });

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', checkoutRoute);


app.listen(process.env.PORT || 8000, () => {
    console.log("Backend server is running on port 8000");
});