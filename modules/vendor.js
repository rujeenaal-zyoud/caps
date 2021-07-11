'use strict';
const faker = require('faker');

require('dotenv').config();

const events = require('../events');

let storeName = process.env.STORE_NAME;


setInterval(() => {

    // Create a fake order, as an object:

    let order = {
        store: storeName,
        orderId: faker.datatype.uuid(),
        customerName: faker.name.findName(),
        address: faker.address.city()

    }
    //here will Emit a ‘pickup’ event and attach the fake order as payload
//emit : making a noise produce - singa
    events.emit('pickup', order);
},
    //define the 5 secand so each 5 sec will create new order
    5000);




function monitorDelivered(order) {
    console.log(` Thank you  to deling with us ${order.customerName}`)

}
//we need to listen the event by on
events.on('delivered', monitorDelivered)

  //we can do it in one line 
  //event.on('Delivered',  (order)console.log (` Thank you  to deling with us ${order.customerName}`)
//)
