#!/usr/bin/env node

// Connecting to ROS 
var ROSLIB = require('roslib');

var ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090'
});

ros.on('connection', function () {
    console.log('Connected to websocket server.');
    // setInterval( () => cmdVel.publish(twist), 1000)
});

ros.on('error', function (error) {
    console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function () {
    listener.unsubscribe();
    console.log('Connection to websocket server closed.');
});

// Publishing a Topic
// ------------------

var cmdVel = new ROSLIB.Topic({
    ros: ros,
    name: '/cmd_vel',
    messageType: 'geometry_msgs/Twist'
});

var twist = new ROSLIB.Message({
    linear: {
        x: 0.1,
        y: 0.2,
        z: 0.3
    },
    angular: {
        x: -0.1,
        y: -0.2,
        z: -0.3
    }
});

console.log("Publishing cmd_vel");

// Subscribing to a Topic
// ---------------------
var listener = new ROSLIB.Topic({
    ros: ros,
    name: '/listener',
    messageType: 'std_msgs/String'
})
listener.subscribe(function (message) {
    console.log(message)
    console.log('Received message on ' + listener.name + ': ' + message.data);
    // listener.unsubscribe(); // 
});

// which expects the following payload
// {"op":"publish","id":"publish:/listener:4","topic":"/listener","msg":{"data":"blablabla"},"latch":false}
// in the first frame, expect the following payload once
// {"op":"advertise","id":"advertise:/listener:2","type":"std_msgs/String","topic":"/listener","latch":false,"queue_size":100}