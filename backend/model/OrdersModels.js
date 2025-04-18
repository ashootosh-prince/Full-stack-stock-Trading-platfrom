const { model } = require("mongoose");

const { OrdersSchema} = require("../schemas/OrdersSchema");

const OrdersModels = new model ("order", OrdersSchema);

model.exports = {OrdersModels};
