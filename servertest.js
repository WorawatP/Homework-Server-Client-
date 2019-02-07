var net = require('net')
var HOST = '127.0.0.1'
var PORT = 6969
let answer = Math.floor(Math.random() * 21)
net.createServer(function(sock){
    console.log('Server is online on ' + sock.remoteAddress +':'+ sock.remotePort)
    console.log('answer:'+answer)
    sock.on('data', function(data){
        console.log('DATA ' + sock.remoteAddress +':' + data)
        if(n = 0){
            sock.write('OK')

        }
        else if(n < 100)
            if(data == answer){
                sock.write('BINGO : ' + answer)
                process.exit()
            }
            else{
                sock.write('WRONG')
                n++
            }
    })
sock.on('close', function(){
    console.log('Server is closed!' + sock.remoteAddress + ':' + sock.remotePort)
    })
}).listen(PORT, HOST)
console.log('Server is running ' + HOST + ':' + PORT)