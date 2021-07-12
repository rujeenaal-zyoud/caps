'use strict';
const events = require('../caps/events');
require('./modules/vendor');

require('./modules/driver');

// run on event then emit

events.on('pickup', managePickup);
events.on('delivered', manageDelivered);
events.on('in-transit', manageInTransit);


// how data on in console log


function managePickup(payload) {

    let data = {
        events: 'pickup',
        time: new Date(),
        //we should put paylod  to show result
        payload: payload
    }
    console.log('EVENT', data)
}

function manageDelivered(payload) {

    let data = {
        events: 'delivered',
        time: new Date(),
        payload: payload
    }

    console.log('EVENT', data)
}

function manageInTransit(payload) {

    let data = {
        events: 'in-transit',
        time: new Date(),
        payload: payload

    }
    console.log('EVENT', data)
}


module.exports={
    manageInTransit:manageInTransit,
    manageDelivered:manageDelivered,
    managePickup:managePickup,
}