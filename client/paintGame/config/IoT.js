const awsIot = require('aws-iot-device-sdk')
var uuid = require('uuid');

const device = awsIot.device({
    clientId: uuid.v1().toString(),
    host: 'a2zb0fmjrgjgl3-ats.iot.eu-west-1.amazonaws.com',
    region: 'eu-west-1',
    protocol: 'wss',
    maximumReconnectTimeMs: 5000,
    debug: true,
    accessKeyId: '',
    secretKey: '',
})

// use the exported device to access the following functions in the game component.
device.on('connect', function () {
    console.log('Connected');
});
  
device.on('error', function (err) {
  console.log('Error', err);
});


export default device