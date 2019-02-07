var net = require('net')
var HOST = '127.0.0.1'
var PORT = 6969
var client = new net.Socket()
var num = 0
var i = 1
client.connect(PORT, HOST, function(){
    console.log('connected to : ' + HOST + ':' + PORT)
    client.write('Worawat')
})

client.on('data', function(data){
    console.log('DATA : ' + data)
    if(data == 'OK'){
        console.log('DATA : ' + data)
        client.write('' + num)
    }
    else if(i < 5){
        if(data == 'WRONG'){
            client.write('' + num)
            num = Math.floor(Math.random() * 21)
            console.log('Send :' + num)
            console.log('i:' + i)
            i++
        }
        else if(data == 'BINGO'){
            client.destroy()
        }
    }
    else{
        client.destroy()
    }
})

client.on('close', function(){
    console.log('disconnected')
})