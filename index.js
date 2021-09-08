// 测试window.onerror
window.onerror = function(message, source, lineno, colno, error) { 
    console.log("onerror捕获到", message)
    console.log("onerror捕获到", source)
    console.log("onerror捕获到", lineno)
    console.log("onerror捕获到", colno)
    console.log("onerror捕获到", error)
}

// throw(new Error("1111")) 
new Promise((resolve, reject) => {
    console.log("进入promise")
    // 这里是同步执行的，却不会抛出异常，而是被catch捕获到，如果catch则不会捕获到
    // throw(new Error("2222"))
    // resolve()
}).then(()=>{
    throw(new Error("3333"))
}).catch(()=>{
    throw(new Error("444"))
})

// https://www.jianshu.com/p/315ffe6797b8