'use strict';
const events = require('../events');


//Emit an ‘in-transit’ event with the payload you received
//Log “DRIVER: picked up [ORDER_ID]” to the console.
events.on('pickup', TransitHandler)

//set time for 1 sec
function TransitHandler(payload) {
    //setInterval function for time
    setInterval(() => {
        console.log(`DRIVER: picked up :${payload.orderId}`);
        events.emit('in-transit', payload);
    }, 1000);
    //after 1 sec call setInterval 3 sc
    deliverd(payload);

}


//set time for 3 sec


function deliverd(payload) {
    setInterval(() => {
        console.log(`delivered `);
        events.emit('delivered', payload);
    }, 3000);

}

