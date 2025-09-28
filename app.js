
let age = 19



const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(age >= 18){
            console.log("promise ki practice horahi hai");
            resolve()
        }else{
            console.log("nahi chal raha");
            reject()
            
        }   
        
    }, 1000);
})

promise1
.then(()=>{
    console.log(".then chal raha hai");
    
})
.catch(()=>{
    console.log(".catch chal raha hai");
    
})