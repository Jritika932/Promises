// Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 
const foo =(number) => {
 
    return new Promise((resolve,reject) =>{
 
     if(number =="yes"){
         resolve(number)
     }else{
         reject("Promise Rejected")
     }
    })
 }
 
 foo("yes").then((data)=>{
     console.log(data);
 }).catch((error)=>{
     console.log(error);
 });