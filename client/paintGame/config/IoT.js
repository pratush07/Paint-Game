const awsIot = require('aws-iot-device-sdk')
const path = require('path');

const device = awsIot.device({
    clientId: 'sdk-nodejs-6b9354d5-ff70-498f-83fb-e58595112157',
    host: 'a2zb0fmjrgjgl3-ats.iot.eu-west-1.amazonaws.com',
    region: 'eu-west-1',
    protocol: 'wss',
    maximumReconnectTimeMs: 5000,
    debug: true,
    accessKeyId: 'AKIAVIVUHIM34YCI5FOK',
    secretKey: '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',
})

// use the exported device to access the following functions in the game component.
device.on('connect', function () {
    console.log('Connected');
});
  
device.on('error', function (err) {
  console.log('Error', err);
});


export default device