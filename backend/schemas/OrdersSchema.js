const { Schema } = require("mongoose");

const OrdersSchema = new Schema ({
    name: String,
    qyt: String,
    price: Number,
    mode: String,
})

model.exports = {OrdersSchema};