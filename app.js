
let age = 19



// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(age >= 18){
//             console.log("promise ki practice horahi hai");
//             resolve()
//         }else{
//             console.log("nahi chal raha");
//             reject()
            
//         }   
        
//     }, 1000);
// })

// promise1
// .then(()=>{
//     console.log(".then chal raha hai");
    
// })
// .catch(()=>{
//     console.log(".catch chal raha hai");
    
// })



function shaadiScnz(bankBalance){
    return promise1 = new Promise((resolve, reject) => {
        if(bankBalance >= 1000000){
            resolve("Shaadi Mubarak")
        }else{
            reject("Abba nahi manegay")
        }
    }, 1000)
}





async function resolvePromise() {
    try {
        let result  = await shaadiScnz(2000000)
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
}


resolvePromise()


