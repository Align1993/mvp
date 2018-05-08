function runAsync1() {
    var p = new Promise(function (resolve, reject) {
        // do some async
        setTimeout(function() {
            console.log('runAsync1 complete');
            resolve('data runAsync1')
        }, 2000)
    })
    return p;
}
function runAsync2() {
    var p = new Promise(function (resolve, reject) {
        // do some async
        setTimeout(function() {
            console.log('runAsync2 complete');
            resolve('data runAsync2')
        }, 2000)
    })
    return p;
}
runAsync1()
.then(function (data) {
    console.log(data);
    return runAsync2()
},
function() {
    console.log('reject callback')
})
.then(function(data) {
    console.log(data)
},
function() {
    console.log('reject callback')
})
.catch(function() {
    console.log('resolve script exception')  
})

Promise.all([runAsync1(), runAsync2()])
.then(function() {
    console.log('result of all')
})