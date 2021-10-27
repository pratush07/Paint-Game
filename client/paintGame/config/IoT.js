const awsIot = require('aws-iot-device-sdk')
const path = require('path');

const device = awsIot.device({
    clientId: 'sdk-nodejs-6b9354d5-ff70-498f-83fb-e58595112157',
    host: 'a2zb0fmjrgjgl3-ats.iot.eu-west-1.amazonaws.com',
    region: 'eu-west-1',
    protocol: 'wss',
    maximumReconnectTimeMs: 5000,
    debug: true,
    accessKeyId: 'ACCESS KEY',
    secretKey: 'SECRET KEY',
})

// use the exported device to access the following functions in the game component.
// device.on('connect', function () {
//     console.log('Connected');
//     device.subscribe('example-topic');
//   });
  
// device.on('error', function (err) {
//   console.log('Error', err);
// });

// device.on('message', function (topic, payload) {
//   const msg = JSON.parse(payload.toString());
//   console.log('Message', topic, msg);
// });

export default device