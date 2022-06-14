// client.js

const WebSocket = require('ws')
const url = 'ws://localhost:9090'
const connection = new WebSocket(url)

connection.onopen = () => {
    setInterval(function () { connection.send('Message From Client') }, 1000);

}

connection.onerror = (error) => {
    console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
    console.log(e.data)
}