var stdin = require('.')


// stdin.readLine().then(function(data){ 
//     stdin.print("your input :"+data)
    
//     return new Promise(function(r,j) {
//         stdin.readLine().then(x=>{ 
//             console.log("z:"+x)
//             r()
//         })
//         });
// })

// stdin.readLine().then(function(data){ 
//     stdin.print("your input :"+data)
    
//     return stdin.readLine().then(x=>{ 
//         console.log("z:"+x)
//     })
// })

function until ()
{
return stdin.readLine().then(function(data){ 
    stdin.print("your input :"+data)
}).then(stdin.readLine).then(data=>{console.log('your input2 :' +data)}).then(until)

}

until()