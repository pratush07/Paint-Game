const awsIot = require('aws-iot-device-sdk')

const device = awsIot.device({
    keyPath: require('./Paintsplat-queue.private.key'),
    certPath: require('./Paintsplat-queue.cert.pem'),
    caPath: require('./root-CA.crt'),
    clientId: 'sdk-nodejs-6b9354d5-ff70-498f-83fb-e58595112157',
    host: 'a2zb0fmjrgjgl3-ats.iot.eu-west-1.amazonaws.com'
})

export default device