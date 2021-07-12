'use strict';

const { it } = require("@jest/globals");
const events = require('../events');
const vender = require('../modules/vendor');
const driver =require('../modules/driver');

describe ('Events',()=>{
    let Spy
    let order = {
        store: 'Rujeena',
        orderId: '34e79247-8627-4c70-9b5c-4f3e979858e2',
        customerName: 'Mr. Jennifer Ernser',
        address: 'East Maximilian',

    }
    beforeEach(()=> {
      Spy = jest.spyOn(console, 'log').mockImplementation();
      });
        
      afterEach(()=> {
       Spy.mockRestore();
      });

it('should rais and listinig the Pickup event',async()=>{
      events.emit('pickup',order);
      await Spy();

    expect(Spy).toHaveBeenCalled();
})


it('should rais and listinig the   delivered event',async()=>{
    events.emit('delivered',order);
    await Spy();

  expect(Spy).toHaveBeenCalled();
})




it('should rais and listinig the   in-transit event',async()=>{
    events.emit('in-transit',order);
    await Spy();

  expect(Spy).toHaveBeenCalled();
})
})