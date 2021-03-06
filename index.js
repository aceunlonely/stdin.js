const os = require('os')

var trimEndNumber = -1
if(os.platform() == 'win32'){
    //if windows 
    trimEndNumber = -2
}

global.stdinRunCount =0;


/**
 * 读取一行 标准输入
 */
var readLine =function(){
    if(global.stdinRunCount++ > 0){
        return new Promise(function(){console.log("stdin.js: running stdin can be only one @ any time")});
    }
    process.stdin.setEncoding('utf8');
    
    var dataFuntion = null;
    var end = function(){
        global.stdinRunCount =0;
        process.stdin.pause()
        process.stdin.removeListener('data',dataFuntion)
    }
    //resume
    process.stdin.resume();
    //console.log("1")
    return new Promise(function(resolve,reject){
        //find lust
        //console.log(2)
        dataFuntion =  (data) => {
            //console.log(3)
            resolve(data.slice(0,trimEndNumber))
            end()
          }
        process.stdin.on('data', dataFuntion);

    });

}

var writeLine = function(data){ process.stdout.write(data)}

exports.readLine = readLine;
exports.writeLine = writeLine;
exports.print = writeLine;
//exports.findFirstLust = findFirstLust;