// server.js

const WebSocket = require('ws')
var ROSLIB = require('roslib');

const wss = new WebSocket.Server({ port: 9090 })

const advertise =
{
    "op": "advertise",
    "id": "advertise:/listener:2",
    "type": "std_msgs/String",
    "topic": "/listener",
    "latch": false,
    "queue_size": 100
}

let id = 2
const payload =
{
    "op": "publish",
    "id": "publish:/listener:4",
    "topic": "/listener",
    "msg": { "data": "blablabla" },
    "latch": false
}

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log(`Received message => ${message}`)
    })

    ws.send(JSON.stringify(advertise))
    setInterval(() => {
        ws.send(JSON.stringify(payload))
        id++
        let newId = "publish:/listener:" + id
        payload["id"] = newId
        console.log(payload["id"])
    }, 1000)
})

// the client will send this call service to the server
// `
// {
//     "op":"call_service",
//     "id":"call_service:/rosapi/topics_and_raw_types:1",
//     "service":"/rosapi/topics_and_raw_types",
//     "type":"rosapi/TopicsAndRawTypes",
//     "args":{}
// }
// 
// which is done probably by
// var Topics = new ROSLIB.Service({
//     ros: ros,
//     name: "/rosapi/topics",
//     serviceType: "rosapi/Topics"
// });
// var request = new ROSLIB.ServiceRequest();
// Topics.callService(request, function (result) {
//     console.log(result);
// });