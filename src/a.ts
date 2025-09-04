// function greetings(firstName : string){
//     console.log("Hello " + firstName);
// }

// greetings("Pranavi");


//type inference
// function sum(a:number,b:number): number{
//     return a+b;
// }

// const x = sum(34,56);
// console.log(x);

function isLegal(age:number){
    if (age > 18){
        return true;
    }else{
        return false;
    }
}

isLegal(10);

// function runLate(fn:()=>number){
//     setTimeout(fn,1000);
// }
