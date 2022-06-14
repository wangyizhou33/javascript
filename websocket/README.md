# websocket server and client

### Source 
https://www.js-tutorials.com/nodejs-tutorial/simple-websocket-example-with-nodejs/

### Install the dependency
```
npm install
```

### Run
```
terminal1$ node server.js
```

```
terminal2$ node client.js
```

# websocket and roslibjs

```
$ node server.js
```

Download https://github.com/RobotWebTools/roslibjs/blob/develop/examples/simple.html
and open it in a browser   

Expect to see messages received in the server 
```
Received message => {"op":"advertise","id":"advertise:/cmd_vel:1","type":"geometry_msgs/Twist","topic":"/cmd_vel","latch":false,"queue_size":100}
Received message => {"op":"publish","id":"publish:/cmd_vel:2","topic":"/cmd_vel","msg":{"linear":{"x":0.1,"y":0.2,"z":0.3},"angular":{"x":-0.1,"y":-0.2,"z":-0.3}},"latch":false}
Received message => {"op":"subscribe","id":"subscribe:/listener:3","type":"std_msgs/String","topic":"/listener","compression":"none","throttle_rate":0,"queue_length":0}
Received message => {"op":"call_service","id":"call_service:/add_two_ints:4","service":"/add_two_ints","type":"rospy_tutorials/AddTwoInts","args":{"a":1,"b":2}}
Received message => {"op":"advertise_service","type":"std_srvs/SetBool","service":"/set_bool"}
Received message => {"op":"call_service","id":"call_service:/rosapi/get_param_names:5","service":"/rosapi/get_param_names","type":"rosapi/GetParamNames","args":{}}
Received message => {"op":"call_service","id":"call_service:/rosapi/set_param:6","service":"/rosapi/set_param","type":"rosapi/SetParam","args":{"name":"max_vel_y","value":"0.8"}}
Received message => {"op":"call_service","id":"call_service:/rosapi/get_param:7","service":"/rosapi/get_param","type":"rosapi/GetParam","args":{"name":"max_vel_y"}}
Received message => {"op":"call_service","id":"call_service:/rosapi/set_param:8","service":"/rosapi/set_param","type":"rosapi/SetParam","args":{"name":"favorite_color","value":"\"red\""}}
Received message => {"op":"call_service","id":"call_service:/rosapi/get_param:9","service":"/rosapi/get_param","type":"rosapi/GetParam","args":{"name":"favorite_color"}}
```