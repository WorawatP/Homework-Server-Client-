var net = require('net')
var HOST = '127.0.0.2'
var PORT = 6969
var client = new net.Socket()
var i = 1
var num
client.connect(PORT, HOST, function(){
    console.log('connected to : ' + HOST + ':' + PORT)
    client.write('Worawat')
})

client.on('data', function(data){
    console.log('DATA : ' + data)
    num = Math.floor(Math.random() * 21)
    if(i <= 5 && data == "WRONG"){
            client.write('' + num)
            console.log('Send :' + num)
            console.log('i:' + i)
            i++
    }
    else if(data == 'BINGO'){
            client.destroy()
        }
    else{
    	    client.destroy() 
    }
})

client.on('close', function(){
    console.log('disconnected')
})